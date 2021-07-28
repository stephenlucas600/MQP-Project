
import URLS from '../constants/urls';

class HttpService {
    handleResponse(xhr, callbackSuccess, callbackError=null) {
        xhr.onloadend = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.response);
                    callbackSuccess(response);
                } else if (xhr.status === 404) {
                    alert ("unable to process request");
                }
            } else {
                callbackError();
            }
        }
    }

    async get(path, callbackSuccess, callbackError=null) {
        let xhr = new XMLHttpRequest();
        const url = URLS.API_URL + path;

        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
        this.handleResponse(xhr, callbackSuccess, callbackError);

        return xhr;
    }

    async post(path, data, callbackSuccess, callbackError=null) {
        let xhr = new XMLHttpRequest();
        const url = URLS.API_URL + path;

        var js = JSON.stringify(data);
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(js);

        this.handleResponse(xhr, callbackSuccess, callbackError);

        return xhr;
    }

    async put(path, data, callbackSuccess, callbackError=null) {
        let xhr = new XMLHttpRequest();
        const url = URLS.API_URL + path;

        var js = JSON.stringify(data);
        xhr.open("PUT", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(js);

        this.handleResponse(xhr, callbackSuccess, callbackError);

        return xhr;
    }

    async delete(path, callbackSuccess, callbackError=null) {
        let xhr = new XMLHttpRequest();
        const url = URLS.API_URL + path;

        xhr.open("DELETE", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();

        this.handleResponse(xhr, callbackSuccess, callbackError);

        return xhr;
    }
}

const httpService = new HttpService();
export default httpService;

