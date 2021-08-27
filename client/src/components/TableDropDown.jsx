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
      tableType: '',
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(eventKey) {
    console.log(eventKey)
    this.setState({tableType: eventKey, tableTitle: eventKey })
    this.props.tableDropdown(eventKey);
  }

  render() {
    let {tableTitle} = this.props;
  return (
    <>
      <DropdownButton onSelect={this.onSelect} id="dropdown-basic-button" title={tableTitle} className="left">
        <Dropdown.Item key="organizations" eventKey="organizations">organizations</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item key="organization_programs" eventKey="organization_programs">organization programs</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item key="contact_conections" eventKey="contact_conections">contacts</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item key="programs_of_types" eventKey="programs_of_types">programs</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item key="organizations_multiple_services" eventKey="organizations_multiple_services">organizations with multiple services</Dropdown.Item>
        <Dropdown.Divider />
        {/* lacks conmmunation with backend to work properly
        <Dropdown.Item key="organization_lack_service_type" eventKey="organization_lack_service_type">organizations lack services</Dropdown.Item> 
        */}
      </DropdownButton>
    </>
  );
 }
}
