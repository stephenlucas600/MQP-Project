import URLS from "../constants/urls";

/*
*  a class that creates XMLHttpRequest to routes
*/
class HttpService {
  handleResponse(xhr, callbackSuccess, callbackError = null) {
    xhr.onloadend = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.response);
          callbackSuccess(response);
        } else if (xhr.status === 400) {
          alert("unable to process request");
        }
      } else {
        callbackError();
      }
    };
  }

  // create a XMLHttpRequest to call a "get" path to routes.js
  async get(path, callback) {
    let xhr = new XMLHttpRequest();
    const url = URLS.API_URL + path;

    xhr.open("GET", url, true);
    xhr.send();
    this.handleResponse(xhr, callback);

    return xhr;
  }

  // create a XMLHttpRequest to call a "post" path to routes.js
  async post(path, data, callback) {
    let xhr = new XMLHttpRequest();
    const url = URLS.API_URL + path;

    var js = JSON.stringify(data);
    xhr.open("POST", url, true);
    xhr.send(js);

    this.handleResponse(xhr, callback);

    return xhr;
  }

}

const httpService = new HttpService();
export default httpService;
