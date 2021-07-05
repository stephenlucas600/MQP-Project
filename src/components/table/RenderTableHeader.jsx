import * as React from "react";

// Render row Headers in table
export default function renderTableHeader(dataTable) {
  let header = Object.keys(dataTable[0]);
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
}
