const BASE_URL = 'https://www.dnd5eapi.co/api/races';

let array = [];


//// FUNCTION CHE REINDERIZZA ALLA PAGINA DELLA CARD SELEZIONATA
function goToPage(id) {
    let urlString = '/race.html';
   console.log(id)
    if (id) {
        urlString = urlString + '?id=' + id;
    }
           window.location.href = urlString;
}



//// FUNCTION CHE PRENDE I DATI IN ENTRATA E LI VISUALIZZA SULLO SCHERMO
function displayObject(obj) {
    array = Object.values(obj)[1];
    display(array);
}


//// FUNCTION CHE CREA IL TEMPLATE HTML, DOVE ANDRANNO INSERITI I DATI
function display(array) {
   const container = document.getElementById('container-information');

   for (const page of array) {
       
       const div = document.createElement('div');
       div.onclick = () => goToPage(page.index);

       div.classList.add('card');

       

       const img = document.createElement('img');
       img.src = './assets/' + page.index + ".png";

       div.appendChild(img);

       const name = document.createElement('p');
       const node = document.createTextNode(page.name);
       
       name.appendChild(node);
       div.appendChild(name);
       

       container.appendChild(div);
   }
}



//// FUNCTION CHE RICHIEDE I DATI DA UN DATABASE ESTERNO
function requestData() {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(result => displayObject(result))
}

const topScroll = document.getElementById("top-btn");
topScroll.onclick = () => scrollBackTop()


// // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 36 || document.documentElement.scrollTop > 36) {
    topScroll.style.display = "block";
  } else {
    topScroll.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollBackTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



requestData()