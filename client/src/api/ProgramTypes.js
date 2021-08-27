import httpService from '../services/HttpService';
class ProgramTypesApi {
    
    static listAllProgramTypes(callback) {
        let url = `/programs_of_types`;
        return httpService.get(url, callback);
    }
}

export default ProgramTypesApi;
