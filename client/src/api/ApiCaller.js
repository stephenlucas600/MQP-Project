
import ContactsApi from '../api/Contacts';
import OrganizationApi from '../api/Organizations';
import OrganizationsAndProgramsApi from '../api/OrganizationsAndPrograms';
import OrganizationsLackServiceTypenApi from '../api/OrganizationsLackServiceType';
import OrganizationsMultipleServicesApi from '../api/OrganizationsMultipleServices';
import ProgramTypesApi from '../api/ProgramTypes';
import EventsApi from '../api/Events';

export default function apiCaller (tabletype, callback) {
	
	switch(tabletype) {
		case "organizations":
			return OrganizationApi.listAllOrganizations((response) => callback(response));

		case "organization_programs":
			return OrganizationsAndProgramsApi.listAllOrganizationsAndPrograms((response) => callback(response));
		
		case 'contact_conections':
			return ContactsApi.listAllContacts((response) => callback(response));
		
		case "organization_lack_service_type":
			return OrganizationsLackServiceTypenApi.listAllOrganizationsLackServiceType((response) => callback(response));
		
		case "organizations_multiple_services":
			return OrganizationsMultipleServicesApi.listAllOrganizationsMultipleServices((response) => callback(response));
		
		case "programs_of_types":
			return ProgramTypesApi.listAllProgramTypes((response) => callback(response));

		case "program_events":
			return EventsApi.listAllEvents((response) => callback(response));
		
		default: // organizations
			return OrganizationApi.listAllOrganizations((response) => callback(response));
		
	}
}