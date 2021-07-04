import * as React from "react";

export default function renderServicesTypeTableData(dataTable) {
  return dataTable.map((row, index) => {
    const { Servivice_Type_NAME, Description} = row; //destructuring
    return (
      <tr key={Servivice_Type_NAME}>
        <td>{Description}</td>
      </tr>
    );
  });
}
