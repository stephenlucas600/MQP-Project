import React, {Component} from 'react';
//import logo from './logo.svg';
import "./styles/styles.css";

import SearchBar from "./components/SearchBar";
import SearchTable from "./components/DBTable";
import OrganizationApi from"./api/Organizations";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metaHeader:[],
      organizations:[],
      search: window.location,
      loading: false
    };

    this.listAllOrganizations = this.listAllOrganizations.bind(this);

  }


  listAllOrganizations() {
 
  }

  // function a() {

  // }

  // a() =>  {

  // }

  componentDidMount(){
    this.setState({loading: true});
    OrganizationApi.listAllOrganizations((response) => {
      // console.log("Response " + response);
      this.setState({...this.state, loading:false, organizations:response });
    });

  }

 render() {

  const {organizations, search, loading} = this.state;
  const query = new URLSearchParams(search).get('s');

  return (
    <div className="App">
      <h1 className="title">Search</h1>
      <div className="SearchBar">
       <SearchBar />
      </div>
      <div className="SearchTable">
      { loading ?
        "Loading data...":
        <SearchTable organizations={organizations}/>

      }
      </div>
      <div className="navigation"></div>
      <div className="instructions">
        <h2>Using this project</h2>
        <p>Test Post output {query}</p>
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
