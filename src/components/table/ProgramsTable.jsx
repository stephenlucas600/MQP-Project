import * as React from "react";
import renderTableHeader from "renderTableHeader";

function renderProgramTableData(dataTable) {
  return dataTable.map((row, index) => {
    const {
      Program_ID,
      Program_NAME,
      Description,
      Website_Link,
      Provider,
      Organization_NAME
    } = row; //destructuring
    return (
      <tr key={Program_ID}>
        <td>{Program_NAME}</td>
        <td>{Description}</td>
        <td>{Website_Link}</td>
        <td>{Provider}</td>
        <td>{Organization_NAME}</td>
      </tr>
    );
  });
}

// Render Contact table
export default function ProgramTable(dataTable) {
  return (
    <div>
      <h1 id="title">Contact Table</h1>
      <table id="contacts">
        <tbody>
          <tr>{renderTableHeader(dataTable)}</tr>
          {renderProgramTableData(dataTable)}
        </tbody>
      </table>
    </div>
  );
}
