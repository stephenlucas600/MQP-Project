import httpService from '../services/HttpService';

class OrganizationsMultipleServicesApi {
    
    static listAllOrganizationsMultipleServices(callback) {
        let url = `/organizations_multiple_services`;
        return httpService.get(url, callback);
    }
}

export default OrganizationsMultipleServicesApi;
