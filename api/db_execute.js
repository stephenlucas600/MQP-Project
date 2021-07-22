
const express = require('express')
const app = express();
const port = 8000;
var db = require('./db');
var dbq = require('./db_query');

//create a fonctution that creates a promise to run quirys.
function simpleExecute(statement, params = []) {

	return new Promise(async (resolve, reject) => {

	    try {
	    	var sql = await dbq.takeQuery(statement,params);
	    	console.log(params);

	    	await db.query(sql, params, (err,rows) => {
	  			if (err) { reject(err) }
	  			else {
	 				console.log('Data received from Db:\n');
	 				console.log(rows);
		   			rows = dbq.formatOutputData(rows);
	     	
	      			// return rows;
	      			resolve(rows);
	  			} 
	  		});
	  	} catch (err) { reject(err); } 
	});
}

module.exports.simpleExecute = simpleExecute;