const express = require('express')
const asyncHandler = require('express-async-handler')
const app = express();
const port = 8000;
//var db = require('./db');
//var dbq = require('./db_query');
var execute = require('./db_execute');

//module.import {db_query} from './db_query';

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/organizations', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/organizations',req.params);
    res.send(rows);
}));

// Q3: All programs that belong to this Organization? 
app.get('/organization_programs/:name?', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/organization_programs',req.params);
    res.send(rows);
}));

// Q4: What other programs does this contact info relate to?  
app.get('/contact_conections/:name?', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/contact_conections',req.params);
    res.send(rows);
}));

// Q5: Find programs(description, contact, organization name) under a specific services type. 
app.get('/programs_of_types/:type?', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/programs_of_types',req.params);
    res.send(rows);
}));

// Q12: Which service type is offered by more then two organizations.
app.get('/organizations_multiple_services', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/programs_of_types',req.params);
    res.send(rows);
}));

// Q13: Which Organization offers no programs related to Service Type.
app.get('/organization_lack_service_type/:type', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/organization_lack_service_type',req.params);
    res.send(rows);
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

// app.get('/organization_programs/:name?', (req, res) => {
//    console.log(req.params);
//    //console.log(req);
//   var organization_name = req.params.name;
//   //var sql = dbq.takeQuery('/organization_programs');
//   //console.log(sql, organization_name);
//   // var sql = 'SELECT * FROM Organizations JOIN Programs ON Programs.Organization_ID=Organizations.Organization_ID WHERE Organizations.Organization_NAME LIKE "%' + organization_name +'%";';
//   var sql = dbq.takeQuery('/organization_programs', req.params);
//   console.log("SQL ", sql);
//   //var sql = 'SELECT * FROM Organizations JOIN Programs ON Programs.Organization_ID=Organizations.Organization_ID WHERE Organizations.Organization_NAME LIKE "%?%";'
//   db.query(sql,  (err,rows) => {
//       if(err) throw err;

//      console.log('Data received from Db:\n');
//      console.log(rows);
//       rows = dbq.formatOutputData(rows);
//      // return rows;
//      res.send(rows)
//   });
//   // res.send(programs)

// });

// app.get('/organizations', (req, res) => {
//   //var sql = dbq.db_query('/organizations');

//   var result = execute.simpleExecute('/organizations', req);

//   //console.log("got results");
//   //if (reject) {throw err;}
//   //else 
//   res.send(result.rows);
//   //console.log("transaction completed");

// });

// app.get('/organizations', (req, res) => {
//   //var sql = dbq.db_query('/organizations');
// 	db.query(dbq.takeQuery('/organizations'), (err,rows) => {
//   		if(err) throw err;

//  		 console.log('Data received from Db:\n');
//  		 console.log(rows);
//      rows = dbq.formatOutputData(rows);
//      // return rows;
//      res.send(rows)
//   });
//   // res.send(programs)

// });

// app.get('/organizations', (req, res) => {
//   db.query('SELECT * FROM organizations', (err,rows) => {
//       if(err) throw err;

//      console.log('Data received from Db:\n');
//      console.log(rows);
//      rows =  JSON.parse(JSON.stringify(rows).replace(/"\s+|\s+"/g,'"'))
//      // return rows;
//      res.send(rows)
//   });
//   // res.send(programs)

// });




// app.get('/contact_conections', (req, res) => {
//   var sql = dbq.takeQuery('/contact_conections');
//   //var sql = 'SELECT * FROM Programs_Contacts JOIN Programs ON Programs.Program_ID=Programs_Contacts.program_ID JOIN Contacts ON Programs_Contacts.Contact_ID=Contacts.Contact_ID JOIN Organizations ON Organizations.Organization_ID=Contacts.Organization_ID WHERE Contacts.Email LIKE "%?%";'
//   db.query(sql, req, (err,rows) => {
//       if(err) throw err;

//      console.log('Data received from Db:\n');
//      console.log(rows);
//     rows = dbq.formatOutputData(rows);
//      // return rows;
//      res.send(rows)
//   });
//   // res.send(programs)
// });



// app.get('/organizations_multiple_services', (req, res) => {
//   var sql = 'select COUNT(*) As NUM_OF_ORG_Services, ORG_TYPS.Service_Type_NAME FROM ( select DISTINCT Organizations.Organization_NAME, Services_Type.Service_Type_NAME FROM Organizations JOIN Programs ON Organizations.Organization_ID=Programs.Organization_ID JOIN Services_Type_has_Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID ) ORG_TYPS group by ORG_TYPS.Service_Type_NAME HAVING Count(*) > 2;'
//   //db.query(dbq.takeQuery('/organizations_multiple_services'), req, (err,rows) => {
//   console.log(req);
//   console.log(req.baseUrl);
//   console.log(req.body);
//   console.log(req.params);

//   db.query(sql, req, (err,rows) => {
//     if(err) throw err;

//     console.log('Data received from Db:\n');
//     console.log(rows);
//     rows = dbq.formatOutputData(rows);
//     // return rows;
//     res.send(rows)
//   });
// });




// app.get('/organization_lack_service_type', (req, res) => {
//   var sql = dbq.takeQuery('/organization_lack_service_type');
//   //var sql = 'SELECT * FROM Organizations WHERE Organizations.Organization_ID not in ( SELECT distinct Organizations.Organization_ID FROM Organizations JOIN Programs ON Organizations.Organization_ID=Programs.Organization_ID JOIN Services_Type_has_Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID WHERE Services_Type.Service_Type_NAME  like "?");'
//   db.query(sql, req, (err,rows) => {
//       if(err) throw err;
//       console.log('Data received from Db:\n');
//       console.log(rows);
//       rows = dbq.formatOutputData(rows);
//       // return rows;
//       res.send(rows)
//   });
//   // res.send(programs)
// });



