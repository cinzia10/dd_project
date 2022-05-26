



const BASE_URL = 'https://www.dnd5eapi.co/api';

const array = [];


function goToPage(index) {
  let urlString = "/prova.html"
  if(index){
    urlString = urlString + '?id=' + index;
  }
  window.location.href = urlString;
}

function initPage(element) {
    array = element.map(obj => Race.fromDbObj(obj));
}


function loadPg() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(result => initPage(result))
    //.catch(error => stopLoading())
  }

  loadPg()