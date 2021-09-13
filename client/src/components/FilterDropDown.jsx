/** Stephen Lucas
* Fucntion to Render the Dropdown button and menue for home.jsx
**/
import React, {Component} from "react";
//import { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


export default class FilterDropDown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterType: '',
      metaheaders: this.props.metaHeaders,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(eventKey) {
    console.log(eventKey)
    this.setState({filterType: eventKey})
    this.props.filterDropdown(eventKey);
  }


  render() {

  let {filterTitle} = this.props;
  let dropdownItems = [];
  this.props.metaHeaders.map((mh) => {
    if (mh.key.indexOf('Service') < 0) {
      dropdownItems.push(
        <>
          <Dropdown.Item key={mh.key} eventKey={mh.key}>{mh.text}</Dropdown.Item>
          <Dropdown.Divider />
          </>
      );
    }
  }); 
  return (
    <>
      <DropdownButton onSelect={this.onSelect} id="dropdown-basic-button" title={filterTitle} className="left">
        {dropdownItems}
      </DropdownButton>
    </>
  );
}
}
