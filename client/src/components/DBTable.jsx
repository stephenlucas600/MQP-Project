import * as React from "react";
import { useState, useEffect } from "react";
import metaMaker from "../components/HeaderMeta"
import "../styles/styles.css";

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

 let newMeta;
 
 
 if(organizations.length > 0) {
  const meta_keys = Object.keys(organizations[0]);
  console.log('tableDB: get meta_keys:' + meta_keys);
  newMeta = metaMaker(meta_keys);
  console.log("TableDB: newMeta: " + JSON.stringify(newMeta));
  //setHeaderMeta(newMeta);
 }

 const [headerMeta, setHeaderMeta] = useState(meta);
 const [tableData, setTableData] = useState([]);
 

 //table cell Data
 const data = organizations
 console.log("TableDB: organizations maped data " + JSON.stringify(data));

 useEffect(() => {
   // normalize data
   if(organizations.length > 0) {
    setHeaderMeta(newMeta);
   }

   setTableData(normalizeData(data), headerMeta);

   console.log("TableDB Update");

 }, [organizations]);

 return (
   <table className="container">
     <TableHeader headers={headerMeta} />
     <TableData data={tableData} meta={headerMeta} />
   </table>
 );
}

function TableHeader({ headers }) {
  return (
    <thead className="table-row"> 
    <tr>
      {
        headers.map((d) => <TableHeaderCell data={d} key={d.key}/>)
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
  console.log("data in table cell ============= " + data + " " + + JSON.stringify(data))
  return (
    <td className="table-cell">
      {(data.key === 'Website_Link' || data.key === 'Program_Website_Link') ? 
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
   return keys.map(key => ({ key, text: td[key] }));
 });
}
