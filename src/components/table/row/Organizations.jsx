import * as React from "react";

export default function renderOrganizationTableData(dataTable) {
  return dataTable.map((row, index) => {
    const { Organization_NAME, Website_Link, Description } = row; //destructuring
    return (
      <tr key={Organization_NAME}>
        <td>{Website_Link}</td>
        <td>{Description}</td>
      </tr>
    );
  });
}
