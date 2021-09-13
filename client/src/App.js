import React, {Component} from 'react';
import "./styles/styles.css";

import SearchBar from "./components/SearchBar";
import SearchTable from "./components/DBTable";
import OrganizationApi from"./api/Organizations";
import metaMaker from"./components/HeaderMeta";
import apiCaller from"./api/ApiCaller";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: '',
      metaHeaders:[],
      organizations:[],
      currentOrganizations: [],
      search: window.location,
      loading: false
    };

    //this.listAllOrganizations = this.listAllOrganizations.bind(this);
    this.filterTable = this.filterTable.bind(this);
    this.changeTable = this.changeTable.bind(this);

  }


  changeTable(tabletype) {
    //call for table
    console.log("changing table to: " + tabletype);

    //let response = 
    apiCaller(tabletype, (response) => {
      if (response !== 'null') {
        //console.log("response: " + JSON.stringify(response));
        let meta_keys = Object.keys(response[0]);
        //console.log("response meta_keys: " + meta_keys);
        let headers = metaMaker(meta_keys);
        //console.log("mount meta keys " + JSON.stringify(headers));
        // console.log("Response " + response);
        this.setState({...this.state, loading:false, organizations:response, currentOrganizations: response, metaHeaders: headers});
      }
    });
  }

  //filter table by removing colms form selected row that don't that includes the value
  filterTable(filtertype, value, service, exclude) {
    let currState = this.state;
    //currState.organizations.filter((org) => console.log("filterTable rows: " + org[filtertype].toLowerCase().indexOf(value.toString().toLowerCase())));
    //let filteredOrg = currState.organizations.filter((org) => org[filtertype].toString().toLowerCase() === value.toString().toLowerCase());
   // let filteredTB = currState.organizations.filter((tb) => tb[filtertype].toLowerCase().indexOf(value.toString().toLowerCase()) >= 0);

    console.log("exclude?: " +  exclude);

    let filteredTB = currState.organizations.filter( (tb) => 
      { 
        if(filtertype === 'Start_Date' || filtertype == 'End_Date') {

          if (exclude) {
            return new Date(tb[filtertype]).toLocaleString().indexOf(value.toString().toLowerCase()) < 0 ;
          }
          return new Date(tb[filtertype]).toLocaleString().indexOf(value.toString().toLowerCase()) >= 0 ;
        } else {
          
          if (exclude) {
            return tb[filtertype].toLowerCase().indexOf(value.toString().toLowerCase()) < 0;
          }

          return tb[filtertype].toLowerCase().indexOf(value.toString().toLowerCase()) >= 0;
        }
      // ? {new Date(tb[filtertype]).toLocaleString().indexOf(value.toString().toLowerCase()) >= 0}
      // : tb[filtertype].toLowerCase().indexOf(value.toString().toLowerCase()) >= 0
      }
    )
    
    if (service !== 'Select Service') {
       let filteredTBS = filteredTB.filter((tb) => tb['Service'] === service);
       currState.currentOrganizations = filteredTBS;
    }
    else {
      currState.currentOrganizations = filteredTB;
    }
    
    this.setState(currState);
    console.log("filterTable: New Table: ");
    console.log(this.state.currentOrganizations);
  }


  componentDidMount(){
    this.setState({loading: true});
    OrganizationApi.listAllOrganizations((response) => {
      let meta_keys = Object.keys(response[0]);
      let headers = metaMaker(meta_keys);
      console.log("mount meta keys " + headers);
      this.setState({...this.state, loading:false, organizations:response, currentOrganizations: response, metaHeaders: headers});
    });

  }

 render() {

  let {currentOrganizations, metaHeaders, loading} = this.state;

  let searchTables = (<SearchTable organizations={currentOrganizations}/>);

  return (
    <div className="App">
      <h1 className="title">Search</h1>
      <div className="SearchBar">
       <SearchBar filterTable={this.filterTable}  changeTable={this.changeTable} metaHeaders={metaHeaders} />
      </div>
      <div className="SearchTable">
      { loading ?
        "Loading data...":
        searchTables
      }
      </div>
      <div className="navigation"></div>
      <div className="instructions">
        <h2>Using this project</h2>
        <p>
          This is the Glitch <strong>Hello React</strong> project. You can use
          it to build your own app. See more info in the _ page, and check out README.md in the
          editor for additional detail plus next steps you can take!
        </p>
      </div>
    </div>
  );
}
}

export default App;
