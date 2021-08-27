import React, {Component} from 'react';
import FilterDropDown from "../components/FilterDropDown";
import TableDropDown from "../components/TableDropDown";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: 'Filter',
      searchValue: '',
      tableType: '',
      tableTitle: 'Tables',
      headers: this.props.metaHeaders
    };

    //this.listAllOrganizations = this.listAllOrganizations.bind(this);
    // this.filterOrganizations = this.filterOrganizations.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dropdownFilter = this.dropdownFilter.bind(this);
    this.dropdownTable = this.dropdownTable.bind(this);
  }


  // 1. Change this SearchBar to a class (something like in App.js)
  // 2. Define states constructor for this class
  // 3. Define function to trigger when form is submitted.
  // 4. Get value selected from dropdown to pass this to a filter type.


  handleChange(event) {
    this.setState({...this.state, searchValue: event.target.value});
     console.log("Here searchValue ", event.target.value);

  }

  handleSubmit(event) {
    event.preventDefault();
    const {filterType, searchValue, tableType} = this.state;
    if(filterType !== 'Filter'){
      this.props.filterOrganizations(filterType,searchValue);
    }
  }


  dropdownFilter (filterValue) {
    console.log("Filter Here ", filterValue);
    this.setState({...this.state, filterType: filterValue});
  }

  dropdownTable (tableValue) {
    console.log("Table Here ", tableValue);
    let currState = this.state;
    currState.tableType = tableValue;
    currState.tableTitle = tableValue;
    currState.filterType = 'Filter';
    this.setState(currState);
    console.log("Every values in dropdown changed");
    console.log(currState);
    // this.setState({...this.state, tableType: tableValue, tableTitle: tableValue, filterTitle: 'Filter'});

    this.props.changeTable(tableValue);
  }

  render() {
    //const query = new URLSearchParams(Search).get('action');
    let {filterType, tableTitle }= this.state;

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
          <FilterDropDown filterDropdown={this.dropdownFilter} filterTitle={filterType} metaHeaders={this.props.metaHeaders} />
          <TableDropDown tableDropdown={this.dropdownTable}  tableTitle={tableTitle} />
          <button type="submit" value="Submit">Search</button>
        </div>
      </form>
    );
  }
}
