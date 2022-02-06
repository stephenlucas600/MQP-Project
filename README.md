Many adults on the autism spectrum without intellectual disabilities in Massachusetts have difficulties finding services to help them. 
There is a lack of awareness about such existing providers and where to look them up. People have trouble finding the resources easily due to the lack of a centralized system that has the information about all the existing services and their providers, all in one place. 
This project sets about creating a prototype centralized database and web interface to unify all these resources. The project uses SQL and JavaScript, using MySQL to run the database with React.js and Node.js holding the client user interface.

## Set up

Download the `api` and `cliant` folders.

To use the provided sql database structure, refer to Figure 3: Database Outline Code found in chapter 3.3 Database Outline, on page 18 to 20 found in the Database to Access Services in Massachusetts for ASD Adults Without an Intellectual Disability document.
Use the sql line commandes found in the 'sql' to popluate the database. 
in the `api.db.js` modify the `Port: `, `password: `, `database: ` to match with the database.

## Available Scripts

To run program, Open two computer terminals.

`cd api` in the fist terminal and run # `node index.js` to turn on program's backend.


`cd client` in the sencond terminal and run # `npm start` to to run the program.

