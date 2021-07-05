/**
 * Stephen Lucas
 * Functions to Render the table, table row headers and table rows for database Contacts
 **/
import * as React from "react";

// Render entry rows in table
function renderContactsTableData(dataTable) {
  return dataTable.map((row, index) => {
    const {
      Contact_ID,
      Title,
      Email,
      Address,
      Phone_Number,
      Organization_NAME
    } = row; //destructuring
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

// render Rows
function ReducedProgramsTableRow(Contact_ID, ReducedProgramsTable) {
  return (
    <div>
      <table id="programs">
        <tbody>
          {ReducedProgramsTableRowmap(Contact_ID, ReducedProgramsTable)}
        </tbody>
      </table>
    </div>
  );
}

// Convert table into row and return them to ReducedProgramsTableRow
function ReducedProgramsTableRowmap(Contact_ID, ReducedProgramsTable) {
  return ReducedProgramsTable.map((row, index) => {
    const { Contact_ID, Program_NAME } = row; //destructuring
    return <tr key={Program_NAME}></tr>;
  });
}

// Render row Headers in table
function renderTableHeader(dataTable) {
  let header = Object.keys(dataTable[0]);
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
}

// Render Contact table
export default function ContactTable(dataTable, ReducedProgramsTable) {
  // test if ContactTable and helper functions work, Remove dataTable from ContactTable inpute and uncoment below
  // const dataTable = [
  //   {
  //     Email: "Wasif",
  //     Title: 1,
  //     Address: 455,
  //     Phone_Number: 21,
  //     Organization_NAME: "wasif@email.com"
  //   },
  //   {
  //     Email: "mad",
  //     Title: 1,
  //     Address: 455,
  //     Phone_Number: 21,
  //     Organization_NAME: "wasif@email.com"
  //   },
  //   {
  //     Email: "dasd",
  //     Title: 1,
  //     Address: 455,
  //     Phone_Number: 21,
  //     Organization_NAME: "wasif@email.com"
  //   }
  // ];

  return (
    <div>
      <h1 id="title">Contact Table</h1>
      <table id="contacts">
        <tbody>
          <tr>{renderTableHeader(dataTable)}</tr>
          {renderContactsTableData(dataTable)}
        </tbody>
      </table>
    </div>
  );
}
