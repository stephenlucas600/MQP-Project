import * as React from "react";
import { useState, useEffect } from "react";

//Header Meta info
const meta = [
  {
    key: 'Organization_ID',
    text: 'ID',
    sort: true,
  },
  {
    key: 'Organization_NAME',
    text: 'Name',
    sort: true,
  },
  {
    key: 'Website_Link',
    text: 'Website',
    sort: true,
  },
  {
    key: 'Description',
    text: 'Description',
    sort: true,
  },
]

export default function Table({organizations}) {
 
 if(organizations.length > 0) {
  const meta_keys = Object.keys(organizations[0]);
  console.log(Object.keys(organizations[0]));
  
 }
 // const meta = [];
 //   meta_keys.forEach(m => {
 //  / / make fucntion
 //  })
 
 const [headerMeta, setHeaderMeta] = useState(meta);
 const [tableData, setTableData] = useState([]);

 //table cell Data
 const data = organizations
 console.log("organizations maped data " + JSON.stringify(data));

 useEffect(() => {
   // normalize data

   setTableData(normalizeData(data), meta);
 }, []);

 return (
   <table className="container">
     <TableHeader headers={headerMeta} />
     <TableData data={tableData} meta={meta} />
   </table>
 );
}

function TableHeader({ headers }) {

  return (
    <thead className="table-row"> 
    <tr>
      {
        headers.map((d) => <TableHeaderCell data={d} />)
      }
      </tr>
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
console.log("data in table cell ============= " + data)
  return (
    <td className="table-cell">
      {data.key === 'Website_Link' ? 
      <a href={data.text} target="_blank">{data.text}</a>
      :data.text}
    </td>
  )
}

function TableHeaderCell ({ data }) {
  return (
    <th className="table-header-cell">
      {data.text}
    </th>
  )
}

function normalizeData(data) {
 return data.map(td => {
   const keys = Object.keys(td);
   // Reminder change importent ID key in db_query.js to 'key'
   return keys.map(key => ({ key, text: td[key] }));
 });
}
