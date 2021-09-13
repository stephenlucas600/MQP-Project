import React, {Component} from 'react';
import FilterDropDown from "../components/FilterDropDown";
import TableDropDown from "../components/TableDropDown";
import ServiceDropDown from "../components/ServiceDropDown";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: 'Select Column',
      searchValue: '',
      tableType: '',
      tableTitle: 'Select Table',
      serviceType: 'Select Service',
      excludeFilter: false,
      headers: this.props.metaHeaders
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dropdownFilter = this.dropdownFilter.bind(this);
    this.dropdownTable = this.dropdownTable.bind(this);
    this.dropdownService = this.dropdownService.bind(this);
  }


  // 1. Change this SearchBar to a class (something like in App.js)
  // 2. Define states constructor for this class
  // 3. Define function to trigger when form is submitted.
  // 4. Get value selected from dropdown to pass this to a filter type.


  handleChange(event) {
    if (event.target.type === 'checkbox' ) {
      this.setState({...this.state, excludeFilter: event.target.checked});
      console.log("Here excludeFilter: ", event.target.checked);
    }
    else {
      this.setState({...this.state, searchValue: event.target.value});
      console.log("Here searchValue: ", event.target.value);
    }
    
  }

  handleInputChange

  handleSubmit(event) {
    event.preventDefault();
    const {filterType, searchValue, serviceType, excludeFilter} = this.state;
    if(filterType !== 'Select Column'){
      this.props.filterTable(filterType,searchValue, serviceType, excludeFilter);
    }
  }


  dropdownFilter (filterValue) {
    console.log("Filter Here ", filterValue);
    this.setState({...this.state, filterType: filterValue});
  }

  dropdownService (serviceValue) {
    console.log("Service Here ", serviceValue);
    this.setState({...this.state, serviceType: serviceValue});
  }

  dropdownTable (tableValue) {
    console.log("Table Here ", tableValue);
    let currState = this.state;
    currState.tableType = tableValue;
    currState.tableTitle = tableValue;
    currState.filterType = 'Select Column';
    currState.serviceType = 'Select Service';
    this.setState(currState);
    console.log("Every values in dropdown changed");
    console.log(currState);
    // this.setState({...this.state, tableType: tableValue, tableTitle: tableValue, filterTitle: 'Filter'});

    this.props.changeTable(tableValue);
  }

  render() {
    //const query = new URLSearchParams(Search).get('action');
    let {filterType, tableTitle, serviceType }= this.state;

    let sdt 

    if ( tableTitle === "programs_of_types" || tableTitle === "organizations_multiple_services"){
      sdt = <ServiceDropDown serviceDropDown={this.dropdownService}  serviceType={serviceType} />
    } else {
      sdt = null;
    }

    return (
      <form onSubmit={this.handleSubmit} method="get">
        <div className="left">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
          type="text"
          value={this.state.searchValue}
          onChange={this.handleChange}
          id="header-search"
          placeholder="Search Table"
          name="includeValue"
        />
        </div>

        <div className="buttonStyle left">    
          <TableDropDown tableDropdown={this.dropdownTable}  tableTitle={tableTitle} />
          {sdt}
          <FilterDropDown filterDropdown={this.dropdownFilter} filterTitle={filterType} metaHeaders={this.props.metaHeaders} />
          <label>
            Exclude:
            <input
              name="excludeFilter"
              type="checkbox"
              checked={this.state.excludeFilter}
              onChange={this.handleChange} />
          </label>
          <button type="submit" value="Submit">Search</button>
        </div>
      </form>
    );
  }
}
