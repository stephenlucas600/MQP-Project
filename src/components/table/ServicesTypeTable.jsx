import * as React from "react";

/**
 * Stephen Lucas
 * Functions to Render the table, table row headers and table rows for database Contacts
 **/

function renderServicesTypeTableData(dataTable) {
  return dataTable.map((row, index) => {
    const { Servivice_Type_NAME, Description } = row; //destructuring
    return (
      <tr key={Servivice_Type_NAME}>
        <td>{Description}</td>
      </tr>
    );
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
export default function ServicesTypeTable(dataTable, ReducedProgramsTable) {
  return (
    <div>
      <h1 id="title">Contact Table</h1>
      <table id="contacts">
        <tbody>
          <tr>{renderTableHeader(dataTable)}</tr>
          {renderServicesTypeTableData(dataTable)}
        </tbody>
      </table>
    </div>
  );
}
