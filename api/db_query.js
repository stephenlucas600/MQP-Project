
 module.exports.takeQuery = function takeQuery (path, params={}){
	switch(path){

		case '/organizations':
			return 'SELECT * FROM organizations';
			break;

		// Q3: All programs that belong to this Organization? 
		case '/organization_programs':
			return `SELECT * FROM Organizations JOIN Programs ON Programs.Organization_ID=Organizations.Organization_ID WHERE Organizations.Organization_NAME LIKE "%${params.name}%";`;
			break;

		// Q4: What other programs does this contact info relate to? 
		case '/contact_conections':
			return `SELECT * FROM Programs_Contacts JOIN Programs ON Programs.Program_ID=Programs_Contacts.program_ID JOIN Contacts ON Programs_Contacts.Contact_ID=Contacts.Contact_ID JOIN Organizations ON Organizations.Organization_ID=Contacts.Organization_ID WHERE Contacts.Email LIKE "%${params.name}%";`;
			break;

		// Q5: Find programs(description, contact, organization name) under a specific services type.  
		case '/programs_of_types':
			return  `SELECT * FROM Services_Type_has_Programs JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID JOIN Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Organizations ON Organizations.Organization_ID=Programs.Organization_ID JOIN Programs_Contacts ON Programs.Program_ID=Programs_Contacts.Program_ID JOIN Contacts ON Contacts.Contact_ID=Programs_Contacts.Contact_ID;`
			break;

		// Q12: Which service type is offered by more then two organizations.
		case '/organizations_multiple_services':
			return `select COUNT(*) As NUM_OF_ORG_Services, ORG_TYPS.Service_Type_NAME FROM ( select DISTINCT Organizations.Organization_NAME, Services_Type.Service_Type_NAME FROM Organizations JOIN Programs ON Organizations.Organization_ID=Programs.Organization_ID JOIN Services_Type_has_Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID ) ORG_TYPS group by ORG_TYPS.Service_Type_NAME HAVING Count(*) > 2;`
  			break;

		// Q13: Which Organization offers no programs related to Service Type.
		case '/organization_lack_service_type':
			return `SELECT * FROM Organizations WHERE Organizations.Organization_ID not in ( SELECT distinct Organizations.Organization_ID FROM Organizations JOIN Programs ON Organizations.Organization_ID=Programs.Organization_ID JOIN Services_Type_has_Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID WHERE Services_Type.Service_Type_NAME  like "${params.type}");`
			break;
	};
};

module.exports.formatOutputData = async function formatOutput(data) {
    let dataRes = JSON.parse(JSON.stringify(data).replace(/"\s+|\s+"/g,'"'));

    return dataRes;
}

//module.exports = db_query;

// module.exports.takeQuery = async function takeQuery (path){
// 	switch(true){

// 		case path == '/organizations':
// 			return 'SELECT * FROM organizations';
// 			break;

// 		// Q3: All programs that belong to this Organization? 
// 		case  path.includes('/organization_programs'):
// 			return 'SELECT * FROM Organizations JOIN Programs ON Programs.Organization_ID=Organizations.Organization_ID WHERE Organizations.Organization_NAME LIKE "%?%";';
// 			break;

// 		// Q4: What other programs does this contact info relate to? 
// 		case path.includes('/contact_conections'):
// 			return 'SELECT * FROM Programs_Contacts JOIN Programs ON Programs.Program_ID=Programs_Contacts.program_ID JOIN Contacts ON Programs_Contacts.Contact_ID=Contacts.Contact_ID JOIN Organizations ON Organizations.Organization_ID=Contacts.Organization_ID WHERE Contacts.Email LIKE "%?%";';
// 			break;

// 		// Q5: Find programs(description, contact, organization name) under a specific services type.  
// 		case path.includes('/programs_of_types'):
// 			return  'SELECT * FROM Services_Type_has_Programs JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID JOIN Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Organizations ON Organizations.Organization_ID=Programs.Organization_ID JOIN Programs_Contacts ON Programs.Program_ID=Programs_Contacts.Program_ID JOIN Contacts ON Contacts.Contact_ID=Programs_Contacts.Contact_ID;'
// 			break;

// 		// Q12: Which service type is offered by more then two organizations.
// 		case path.includes('/organizations_multiple_services'):
// 			return 'select COUNT(*) As NUM_OF_ORG_Services, ORG_TYPS.Service_Type_NAME FROM ( select DISTINCT Organizations.Organization_NAME, Services_Type.Service_Type_NAME FROM Organizations JOIN Programs ON Organizations.Organization_ID=Programs.Organization_ID JOIN Services_Type_has_Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID ) ORG_TYPS group by ORG_TYPS.Service_Type_NAMEHAVING Count(*) > 2;'
// 			break;

// 		// Q13: Which Organization offers no programs related to Service Type.
// 		case path.includes('/organization_lack_service_type'):
// 			return 'SELECT * FROM Organizations WHERE Organizations.Organization_ID not in ( SELECT distinct Organizations.Organization_ID FROM Organizations JOIN Programs ON Organizations.Organization_ID=Programs.Organization_ID JOIN Services_Type_has_Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID WHERE Services_Type.Service_Type_NAME  like "?");'
// 			break;
// 	};
// };