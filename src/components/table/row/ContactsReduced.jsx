import * as React from "react";

export default function renderContactsReducedTableData(dataTable) {
  return dataTable.map((row, index) => {
    const { Title, Email, Address, Phone_Number} = row; //destructuring
    return (
      <tr key={Email}>
        <td>{Title}</td>
        <td>{Address}</td>
        <td>{Phone_Number}</td>
      </tr>
    );
  });
}
