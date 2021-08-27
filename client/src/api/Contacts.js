import httpService from '../services/HttpService';

class ContactsApi {
   
    static listAllContacts(callback) {
        let url = `/contact_conections`;
        console.log('listAllContacts');
        return httpService.get(url, callback);
    }
}

export default ContactsApi;
