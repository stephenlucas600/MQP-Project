/** Stephen Lucas
* Fucntion to Render the Dropdown button and menue for home.jsx
**/
import React, {Component} from "react";
import { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";

export default class TableDropDown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tableValue: ''
      
    };

    this.onSelect = this.onSelect.bind(this);

  }

  onSelect(eventKey) {
    console.log(eventKey)
    this.setState({tableValue: eventKey })
    this.props.tableDropdown(eventKey);
  }


  render() {
  return (
    <>
      <DropdownButton onSelect={this.onSelect} id="dropdown-basic-button" title="Dropdown button" className="left">
        <Dropdown.Item eventKey="organizations">organizations</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="organization_programs">organization programs</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="action3">Something else</Dropdown.Item>
      </DropdownButton>
    </>
  );
}
}
