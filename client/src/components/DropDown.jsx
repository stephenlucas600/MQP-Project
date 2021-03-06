/** Stephen Lucas
* Fucntion to Render the Dropdown button and menue for home.jsx
**/
import * as React from "react";
import { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";

export default function DropDown() {
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button" className="left">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </>
  );
}
