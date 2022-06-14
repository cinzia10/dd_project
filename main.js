const BASE_URL = "https://www.dnd5eapi.co/api/races";


let tempArray = [];


/// FUNCTION CHE CONTROLLA LO SCROLL(IN PX) DELLA PAGINA E CAMBIA LO STYLE DEL BUTTON 
const topScroll = document.getElementById("top-btn");
const scrollWindow = document.getElementById("card-container");

scrollWindow.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (scrollWindow.scrollTop > 16) {
    topScroll.style.display = "block";
  } else {
    topScroll.style.display = "none";
  }
}

/// FUNCTION CHE RIPORTA LO SCROLL A 0 (INIZIO PAGINA)
topScroll.onclick = () => scrollBackTop();
function scrollBackTop() {
  scrollWindow.scrollTop = 0;
}




// FUNCTION CHE CERCA IL TERMINE INSERITO E RIMANDA ALLA PAGINA
function search() {
  const input = document.getElementById('search-input');
  console.log('parola cercata', input.value)
  const searchWords = input.value.trim().toLowerCase();
  const term = searchWords.replaceAll(' ', '-');
  const allTerm = [];
  for (const element of tempArray) {
    allTerm.push(element.index)
  }
  if (allTerm.includes(term)) {
    goToPage(term);
  } else {
    input.value = '';
  }
}

/// FUNCTION CHE REINDERIZZA ALLA PAGINA DELLA CARD SELEZIONATA
function goToPage(id) {
  let urlString = "./race.html";
  console.log(id);
  if (id) {
    urlString = urlString + "?id=" + id;
  }
  window.location.href = urlString;
}

/// FUNCTION CHE PRENDE I DATI IN ENTRATA E LI VISUALIZZA SULLO SCHERMO
function objToArray(obj) {
  tempArray = Object.values(obj)[1];
  displayMenu(tempArray);
}

/// FUNCTION CHE CREA IL TEMPLATE HTML, DOVE ANDRANNO INSERITI I DATI
function displayMenu(array) {
  const container = document.getElementById("card-container");

  for (const page of array) {
    const div = document.createElement("div");
    div.onclick = () => goToPage(page.index);

    div.classList.add("card");

    const img = document.createElement("img");
    img.src = "./assets/" + page.index + ".png";

    div.appendChild(img);

    const name = document.createElement("p");
    const node = document.createTextNode(page.name.replace('-', ' '));

    name.appendChild(node);
    div.appendChild(name);

    container.appendChild(div);
  }
}

/// FUNCTION CHE RICHIEDE I DATI DA UN DATABASE ESTERNO
function requestData() {
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((result) => objToArray(result));
}

requestData();

function checkRacesText(){
    let smallArrayOfMonster = []
    const inputText = document.getElementById('search-input').value.toLowerCase()
    console.log(inputText);
    document.getElementById('search-result').innerHTML = ''
    if(inputText === '') return
    for(let i = 0; i < tempArray.length; i++){
        // racestTextContent è una variabile contenuta in racestTextContent.js. E' un array con tutto il testo delle razze
        const raceText = racestTextContent[i].toLowerCase()
        // Se la parola cercata è inclusa da qualche parte nel testo del mostro, aggiungo l'attuale mostro all'array da mostrare  
        if(raceText.includes(inputText))  smallArrayOfMonster.push(tempArray[i])
    }
    console.log(smallArrayOfMonster);
    showSelectedMonsters(smallArrayOfMonster)
}

function showSelectedMonsters(smallArray){
    const searchResultDiv = document.getElementById('search-result')
    for (const creature of smallArray) {
        const button = document.createElement('button')
        button.className = 'search-result-button'
        button.innerHTML = creature.name
        button.onclick = () =>goToPage(creature.index)
        searchResultDiv.append(button)
    }
}




