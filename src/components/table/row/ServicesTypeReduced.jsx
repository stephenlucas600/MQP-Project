import * as React from "react";

export default function renderServicesTypeReducedTableData(dataTable) {
  return dataTable.map((row, index) => {
    const { Servivice_Type_NAME} = row; //destructuring
    return (
      <tr key={Servivice_Type_NAME}>
      </tr>
    );
  });
}
