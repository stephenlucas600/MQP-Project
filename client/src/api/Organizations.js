import httpService from '../services/HttpService';

class OrganizationsApi {
    
    static listAllOrganizations(callback) {
        let url = `/organizations`;

        return httpService.get(url, callback);
    }



    // static getAppointmentByPatient(patientId, callback) {
    //     let url = `/appointments/patients/${patientId}`;

    //     return httpService.get(url, callback);
    // }

    // static getAppointmentByDoctor(doctorId, callback) {
    //     let url = `/appointments/doctors/${doctorId}`;

    //     return httpService.get(url, callback);
    // }

    // static addPatient(patient, callback) {
    //     let url = `/patients`;

    //     return httpService.post(url, patient, callback);
    // }

    // static editPatient(patientId, patient, callback) {
    //     let url = `/patients/${patientId}`;

    //     return httpService.put(url, patient, callback);
    // }

    // static deletePatient(patientId, callback) {
    //     let url = `/patients/${patientId}`;

    //     return httpService.delete(url, callback);
    // }

}

export default OrganizationsApi;
