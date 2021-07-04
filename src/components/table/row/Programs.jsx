import * as React from "react";

export default function renderProgramTableData(dataTable) {
  return dataTable.map((row, index) => {
    const { Program_ID, Program_NAME, Description, Website_Link, Provider, Organization_NAME } = row; //destructuring
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
