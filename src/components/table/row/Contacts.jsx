import * as React from "react";

export default function renderContactsTableData(dataTable) {
  return dataTable.map((row, index) => {
    const { Title, Email, Address, Phone_Number, Organization_NAME} = row; //destructuring
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
