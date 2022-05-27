
const BASE_URL = 'https://www.dnd5eapi.co/api';

let array = [];

const obj = {};


function goToPage(id) {
  let urlString = "/prova.html"
  if(id){
    urlString = urlString + '?id=' + id;
  }
  window.location.href = urlString;
}

function initPage(element) {
  for (const key in element) {
    if (Object.hasOwnProperty.call(element, key)) {
      const value = element[key];
      console.log(key, value)

    }
  }
}


function loadPg() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(result => initPage(result))
    //.catch(error => stopLoading())
  }

  loadPg()