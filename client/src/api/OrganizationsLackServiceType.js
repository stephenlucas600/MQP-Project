import httpService from '../services/HttpService';

class OrganizationsLackServiceTypeApi {

    static listAllOrganizationsLackServiceType(callback) {
        let url = `/organization_lack_service_type`;

        return httpService.get(url, callback);
    }
}

export default OrganizationsLackServiceTypeApi;