const param = parsUrlParams()

const BASE_URL = 'https://www.dnd5eapi.co/api/races/' + param.id;

let array = [];


//// FUNCTION CHE CONTROLLA L'ID DELLA PAGINA
function parsUrlParams() {
    const urlSerchParams = new URLSearchParams(window.location.search)
    const param = Object.fromEntries(urlSerchParams)
    return param;
}


//// FUNCTION CHE CREA UN TAG <p> PER LE PROPRIETA' IL CUI VALORE E' UN ARRAY DI OBJ
function createListElement(container, id) {
    //// CHECK CHE LA LENGTH SIA MAGGIORE DI 0
    if (array[id].length > 0) {
        const firstNode = id.replace('_', ' ');

        const p = document.createElement('p');
        let text = firstNode + ': ';

        for (const element of array[id]) {
            if ((array[id].indexOf(element)) < (array[id].length - 1)) {
                text = text + element.name + ', '
            } else {
                text = text + element.name + '.'
            }
        }

        const node = document.createTextNode(text);
        p.appendChild(node);
        container.appendChild(p)
    }
}


//// FUNCTION CHE CREA L'HTML E INSERISCE I DATI
function displayInfo(array) {

    const container = document.getElementById('container-character');

    const img = document.createElement('img');
    img.src = './assets/' + array.index + ".png";
    img.classList.add('list-img');

    container.appendChild(img)


    const textContainer = document.getElementById('text-container');

    const title = document.createElement('h1');
    const textTitle = document.createTextNode('Name: ' + array.name);
    title.appendChild(textTitle);

    const span = document.createElement('span');
    const spanNode = document.createTextNode('');

    const listContainer = document.createElement('div');

    const speedSpan = document.createElement('span');
    const speedNode = document.createTextNode("Speed " + array.speed + ', ');
    speedSpan.appendChild(speedNode);
    listContainer.appendChild(speedSpan);

    for (const ability of array.ability_bonuses) {
        console.log(ability)
        const abilitySpan = document.createElement('span');
        const abilityNode = document.createTextNode(ability.ability_score.name + ' +' + ability.bonus + ', ')
        abilitySpan.appendChild(abilityNode);
        listContainer.appendChild(abilitySpan);
    }

    createListElement(listContainer, "languages");
    createListElement(listContainer, "traits");
    createListElement(listContainer, "starting_proficiencies");
    createListElement(listContainer, "subraces");


    const age = document.createElement('p');
    const ageNode = document.createTextNode('Age: ' + array.age);
    age.appendChild(ageNode);

    const alignment = document.createElement('p');
    const alignmentNode = document.createTextNode('Alignment: ' + array.alignment);
    alignment.appendChild(alignmentNode);

    const size = document.createElement('p');
    const sizeNode = document.createTextNode('Size: ' + array.size_description);
    size.appendChild(sizeNode);

    textContainer.append(title, listContainer, age, alignment, size)
}


//// FUNCTION CHE PRENDE I DATI IN ENTRATA E LI VISUALIZZA SULLO SCHERMO
function objToArray(obj) {
    array = Object(obj);
    displayInfo(array)
}


//// FUNCTION CHE MANDA UNA RICHIESTA DI DATI ALL'API
function requestData() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(result => objToArray(result))
}


requestData();