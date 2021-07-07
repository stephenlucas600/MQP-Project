import * as React from "react";

export default function renderEventsTableData(dataTable) {
  return dataTable.map((row, index) => {
    const { Event_NAME, Program_NAME, IS_Online, IS_Repeating, Address, Description} = row; //destructuring
    return (
      <tr key={Event_NAME}>
        <td>{Program_NAME}</td>
        <td>{IS_Online}</td>
        <td>{IS_Repeating}</td>
        <td>{Address}</td>
        <td>{Description}</td>
      </tr>
    );
  });
}
