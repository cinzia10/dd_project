const BASE_URL = 'https://www.dnd5eapi.co/api/alignments';

let array = [];


function initPage(element) {
    // console.log(element)
    // console.log(Object.keys(element));
    const temp = Object.values(element)[1]
    // console.log(temp)
    array = temp.map(obj => Race.fromDbObj(obj));
    console.log(array)
    displayInfo(array)
}


function loadPg() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(result => initPage(result))
}

loadPg()

function createCard(element) {

    const cardTemplate = `
        <span>#NAME</span>`


    const raceHtml = cardTemplate.replace('#NAME', element.name)

    return raceHtml;
}

function displayInfo(array) {
    const container = document.getElementById('container-information')
    for (const element of array) {
        const card = document.createElement('div');
        card.innerHTML = createCard(element)
        container.appendChild(card)
    }
}