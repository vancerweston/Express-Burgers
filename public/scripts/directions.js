let googleMap;
const url = '#';
const request = new XMLHttpRequest();

function loadData() {
    request.open('GET', url);
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    googleMap = JSON.parse(request.responseText);
    console.log(googleMap);

    //Put JSON Object data into directions.jade
}

loadData();