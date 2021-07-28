import * as React from "react";
import { useState, useEffect } from "react";


// Render row Headers in table
//export default function renderTableHeader(dataTable) {
 // let header = Object.keys(dataTable[0]);
 // return header.map((key, index) => {
  //  return <th key={index}>{key.toUpperCase()}</th>;
 // });
//}

// function renderData(dataTable) {
//  let header = Object.keys(dataTable[0]);
//  return dataTable.map((row, index) => {
    // const { Servivice_Type_NAME, Description } = row; //destructuring
//    const { header } = row;
 //   return (
 //     <tr key={Servivice_Type_NAME}>
 //       <td>{Description}</td>
 //     </tr>
 //   );
 // });
//}

//Header Meta info
//const meta = [];
//const meta;
const meta = [
  {
    key: 'id',
    text: 'ID',
    sort: true,
  },
  {
    key: 'name',
    text: 'Automobile Company',
    sort: true,
  },
  {
    key: 'age',
    text: 'Years Since Purchase',
    sort: true,
  },
  {
    key: 'color',
    text: 'Color',
    sort: true,
  },
]

const data = [
  { name: 'Porsche', age: 2, color: 'Blue' },
  { name: 'BMW', age: 1, color: 'Grey' },
  { name: 'Renault', age: 2, color: 'Yellow' },
  { name: 'Volkswagen', age: 7, color: 'Matte Red' },
  { name: 'Porsche', age: 2, color: 'Silver Grey' },
  { name: 'Jaguar', age: 6, color: 'Electric Blue' },
  { name: 'Mistubishi', age: 4, color: 'Black' },
  { name: 'Toyota', age: 9, color: 'Copper' },
  { name: 'Honda', age: 12, color: 'Biege' },
].map((d, id) => ({ ...d, id }));

//table cell Data
//const data;
//const data = [].map((d, id) => ({ ...d, id }));

export default function Table({ normalizeData }, meta) {
 const [headerMeta, setHeaderMeta] = useState(meta);
 const [tableData, setTableData] = useState([]);

 useEffect(() => {
   // normalize data
   setTableData(normalizeData(data), meta);
 }, []);

 return (
   <div className="container">
     <TableHeader headers={headerMeta} />
     <TableData data={tableData} meta={meta} />
   </div>
 );
}

function TableHeader({ headers }) {

  return (
    <thead className="table-row">
      {
        headers.map((d) => <TableCell data={d} />)
      }
    </thead>
  )
}

function TableData({ data, meta }) {
  const headerOrder = meta.map(m => m.key);
  return (
    <tbody>
      {
        data.map((row) => (
          <tr className="table-row">
            {
              row.map((_, i) => <TableCell data={row.find(r => r.key === headerOrder[i])} />)
            }
          </tr>
        ))
      }
    </tbody>
  )
}


function TableCell ({ data }) {
  return (
    <td className="table-cell" onClick={data.sortFunc}>
      {data.text}
    </td>
  )
}


function normalizeData(data) {
 return data.map(td => {
   const keys = Object.keys(td);
   // Reminder change importent ID key in db_query.js to 'key'
   return keys.map(key => ({ key, text: td[key] }));
 });
}

/* export default function renderDataSimple(dataTable) {
  let header = Object.keys(dataTable[0]);
  return dataTable.map((row, index) => {
    const { header } = row;
    return index.map((col, index2) => {
    	return <th key={index2}>{col}</th>;
    });
  });
} */