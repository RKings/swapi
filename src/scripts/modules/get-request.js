export default class GetRequest {
  constructor() {

  }

  getPersons(id, callback) {
    let url = 'https://swapi.co/api/people/?page=' + id;
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = e => {
      if (e.currentTarget.readyState === 4 && e.currentTarget.status === 200) {
        callback(e.currentTarget.responseText);
      }
    };

    if ("withCredentials" in xhttp) {
      xhttp.open("GET", url, true);
      xhttp.send();
      console.log(1);
    } else if (typeof XDomainRequest != "undefined") {
      xhttp = new XDomainRequest();
      xhttp.open("GET", url);
      xhttp.send();
      console.log(2);
    }

  }
}
