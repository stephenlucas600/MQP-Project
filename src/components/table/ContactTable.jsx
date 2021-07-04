import * as React from "react";

function renderContactsTableData(dataTable) {
  return this.contacts.map((row, index) => {
    const { Title, Email, Address, Phone_Number, Organization_NAME } = row; //destructuring
    return (
      <tr key={Email}>
        <td>{Title}</td>
        <td>{Address}</td>
        <td>{Phone_Number}</td>
        <td>{Organization_NAME}</td>
      </tr>
    );
  });
}

function renderTableHeader(dataTable) {
  let header = Object.keys(dataTable[0]);
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
}

export default function ContactTable() {
  return (
    <div>
      <h1 id="title">Contact Table</h1>
      <table id="contacts">
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>
    </div>
  );
}
