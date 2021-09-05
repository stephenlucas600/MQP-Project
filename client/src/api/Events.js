import httpService from '../services/HttpService';

class EventsApi {

    static listAllEvents(callback) {
        let url = `/program_events`;
        return httpService.get(url, callback);
    }
}

export default EventsApi;