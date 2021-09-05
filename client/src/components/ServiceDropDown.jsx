import React, {Component} from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default class ServiceDropDown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      serviceType: '',
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(eventKey) {
    console.log(eventKey)
    this.setState({serviceType: eventKey})
    this.props.serviceDropDown(eventKey);
  }

  render() {
    let {serviceType} = this.props;
      return (
      <>
        <DropdownButton onSelect={this.onSelect} id="dropdown-basic-button" title={serviceType} className="left">
          <Dropdown.Item key="Employment" eventKey="Employment">Employment</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item key="Housing and independent living" eventKey="Housing and independent living">Housing and independent living</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item key="Mental Health Support" eventKey="Mental Health Support">Mental Health Support</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item key="Social and Community Engagement" eventKey="Social and Community Engagement">Social and Community Engagement</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item key="Other Needs" eventKey="Other Needs">Other Needs</Dropdown.Item>
          <Dropdown.Divider />
        </DropdownButton>
      </>
      );
  }
}