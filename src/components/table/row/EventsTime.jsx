import * as React from "react";

export default function renderEventsTimeTableData(dataTable) {
  return dataTable.map((row, index) => {
    const { Start_Date, End_Date } = row; //destructuring
    return (
      <tr key={Start_Date}>
        <td>{End_Date}</td>
      </tr>
    );
  });
}
