const express = require("express");
// var router = express.Router();

var oracledb = require("oracledb");
const cors = require("cors");

const mysql = require("mysql");

// change address
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog_posts"
});

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// change address
// var connAttrs = {
//   user: "agalphonsus",
//   password: "AGALPHONSUS",
//   connectString:
//     "(DESCRIPTION = (ADDRESS_LIST =" +
//     "(ADDRESS = (PROTOCOL = TCP)(Host = oracle.WPI.EDU)(Port = 1521)))(CONNECT_DATA =(SID = ORCL)))"
// };

// Route to get all posts
// app.get("/api/get", (req, res) => {
//   db.query("SELECT * FROM posts", (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// Route to get one post Of Program
app.get("/api/getOrganization/:programName", (req, res) => {
  const programName = req.params.programName;
  db.query(
    "SELECT * FROM Organizations JOIN Programs ON Programs.Organization_ID=Organizations.Organization_ID WHERE Organizations.Organization_NAME like %?%",
    programName,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// Route to get one post
// app.get("/api/getFromId/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("SELECT * FROM posts WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// router.get("/", function(req, res) {
//   oracledb.getConnection(connAttrs, function(err, connection) {
//     if (err) {
//       // Error connecting to DB
//       res.set("Content-Type", "application/json");
//       res.status(500).send(
//         JSON.stringify({
//           status: 500,
//           message: "Error connecting to DB",
//           detailed_message: err.message
//         })
//       );
//       return;
//     }

//     connection.execute(
//       "SELECT * FROM PATIENT",
//       {},
//       {
//         outFormat: oracledb.OBJECT // Return the result as Object
//       },
//       function(err, result) {
//         if (err) {
//           res.set("Content-Type", "application/json");
//           res.status(500).send(
//             JSON.stringify({
//               status: 500,
//               message: "Error getting the patient information",
//               detailed_message: err.message
//             })
//           );
//         } else {
//           res.contentType("application/json").status(200);
//           res.send(JSON.stringify(result.rows));
//         }
//         // Release the connection
//         connection.release(function(err) {
//           if (err) {
//             console.error(err.message);
//           } else {
//             console.log("GET /user_profiles : Connection released");
//           }
//         });
//       }
//     );
//   });
// });

// change to other values
// add patient
// router.post('/', function(req, res) {
//     // res.render('index', { title: 'Express' });
//     oracledb.getConnection(connAttrs, function (err, connection) {
//         if (err) {
//             // Error connecting to DB
//             res.set('Content-Type', 'application/json');
//             res.status(500).send(JSON.stringify({
//                 status: 500,
//                 message: "Error connecting to DB",
//                 detailed_message: err.message
//             }));
//             return;
//         }

//         let stmt = `INSERT INTO patient(patientID, address) VALUES(?,?)`;
//         // let patient = ['5120000006', '175 Freedom St, Brookline, MA']; // For testing post method

//         connection.query(stmt, patient, (err, result) => {
//             if (err) {
//                 res.set('Content-Type', 'application/json');
//                 res.status(500).send(JSON.stringify({
//                     status: 500,
//                     message: "Error inserting patient information",
//                     detailed_message: err.message // TODO: If parent key not found, insert into Users
//                 }));

//             } else {
//                 // get inserted id
//                 console.log('Patient Id:' + result.insertId);
//             }
//             // Release the connection
//             connection.release(
//                 function (err) {
//                     if (err) {
//                         console.error(err.message);
//                     } else {
//                         console.log("GET /user_profiles : Connection released");
//                     }
//                 });
//         });
//     });
// });

// // edit patient
// router.post('/:patientId', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

// module.exports = router;
module.exports = db;
