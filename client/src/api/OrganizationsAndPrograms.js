import httpService from '../services/HttpService';

class OrganizationsAndProgramsApi {

    static listAllOrganizationsAndPrograms(callback) {
        let url = `/organization_programs`;
        return httpService.get(url, callback);
    }
}

export default OrganizationsAndProgramsApi;
