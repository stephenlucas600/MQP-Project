const express = require('express')
const asyncHandler = require('express-async-handler')
const app = express();
const port = 8000;
//var db = require('./db');
//var dbq = require('./db_query');
var execute = require('./db_execute');

var cors = require('cors');
app.use(cors());
//module.import {db_query} from './db_query';

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/organizations', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/organizations',req.params);
    res.send(rows);
}));

// Q3: All programs that belong to this Organization? 
app.get('/organization_programs', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/organization_programs',req.params);
    res.send(rows);
}));

// Q4: What other programs does this contact info relate to?  
app.get('/contact_conections', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/contact_conections',req.params);
    res.send(rows);
}));

// Q5: Find programs(description, contact, organization name) under a specific services type. 
app.get('/programs_of_types', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/programs_of_types',req.params);
    res.send(rows);
}));

// Q12: Which service type is offered by more then two organizations.
app.get('/organizations_multiple_services', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/programs_of_types',req.params);
    res.send(rows);
}));

// Q13: Which Organization offers no programs related to Service Type.
app.get('/organization_lack_service_type', asyncHandler(async (req, res, next) => {
    const rows = await execute.simpleExecute('/organization_lack_service_type',req.params);
    res.send(rows);
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});