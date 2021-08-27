
 module.exports.takeQuery = function takeQuery (path, params={}){
	switch(path){

		case '/organizations':
			return 'SELECT Organizations.Organization_NAME AS `NAME`, Organizations.Website_Link, Organizations.Description FROM Organizations;';
			break;

		// Q3: All programs that belong to this Organization? 
		case '/organization_programs':
			return 'SELECT Programs.program_Name AS `Program`, Organizations.Organization_NAME, Organizations.Website_Link, Programs.Program_Website_Link, Programs.Description, Programs.Provider  FROM Organizations JOIN Programs ON Programs.Organization_ID=Organizations.Organization_ID;';
			break;

		// Q4: What other programs does this contact info relate to? 
		case '/contact_conections':
			return 'SELECT Contacts.Title, Contacts.Address, Contacts.Email, Contacts.Phone_Number, Organizations.Organization_NAME, Programs.program_Name FROM Programs_Contacts JOIN Programs ON Programs.Program_ID=Programs_Contacts.program_ID JOIN Contacts ON Programs_Contacts.Contact_ID=Contacts.Contact_ID JOIN Organizations ON Organizations.Organization_ID=Contacts.Organization_ID;';
			break;

		// Q5: Find programs(description, contact, organization name) under a specific services type.  
		case '/programs_of_types':
			return  'SELECT Services_Type.Service_Type_NAME as `Service`, Services_Type.Description as `Service Descr`, Programs.program_Name AS `Program`, Programs.Program_Website_Link, Programs.Description, Programs.Provider, Organizations.Organization_NAME, Organizations.Website_Link, Contacts.Title, Contacts.Address, Contacts.Email, Contacts.Phone_Number FROM Services_Type_has_Programs JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID JOIN Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Organizations ON Organizations.Organization_ID=Programs.Organization_ID JOIN Programs_Contacts ON Programs.Program_ID=Programs_Contacts.Program_ID JOIN Contacts ON Contacts.Contact_ID=Programs_Contacts.Contact_ID;';
			break;

		// Q12: Which service type is offered by more then two organizations.
		case '/organizations_multiple_services':
			return 'select COUNT(*) As NUM_OF_ORG_Services, ORG_TYPS.Service_Type_NAME FROM ( select DISTINCT Organizations.Organization_NAME, Services_Type.Service_Type_NAME FROM Organizations JOIN Programs ON Organizations.Organization_ID=Programs.Organization_ID JOIN Services_Type_has_Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID ) ORG_TYPS group by ORG_TYPS.Service_Type_NAME HAVING Count(*) > 2;';
  			break;

		// Q13: Which Organization offers no programs related to Service Type. (requires params inpute)
		case '/organization_lack_service_type':
			return 'SELECT SELECT Organizations.Organization_NAME AS `NAME`, Organizations.Website_Link, Organizations.Description FROM Organizations WHERE Organizations.Organization_ID not in ( SELECT distinct Organizations.Organization_ID FROM Organizations JOIN Programs ON Organizations.Organization_ID=Programs.Organization_ID JOIN Services_Type_has_Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID WHERE Services_Type.Service_Type_NAME);';
			break;
	};
};

module.exports.formatOutputData = async function formatOutput(data) {
    let dataRes = JSON.parse(JSON.stringify(data).replace(/"\s+|\s+"/g,'"'));

    return dataRes;
}
