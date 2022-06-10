const param = parsUrlParams()

const BASE_URL = 'https://www.dnd5eapi.co/api/races/' + param.id;

let array = [];


//// FUNCTION CHE CONTROLLA L'ID DELLA PAGINA
function parsUrlParams() {
    const urlSerchParams = new URLSearchParams(window.location.search)
    const param = Object.fromEntries(urlSerchParams)
    return param;
}

function createListElement(container, id) {
    console.log(id)
    const div = document.createElement('div');
    const span = document.createElement('span');
    const node = document.createTextNode('ok' + id)
    span.appendChild(node);
    div.appendChild(span);
    container.appendChild(div)
}



function displayObject(obj) {
    array = Object(obj);
    display(array)
}

function display(array) {
    
    const container = document.getElementById('container-character');

    const img = document.createElement('img');
    img.src = './assets/' + array.index + ".png";
    img.classList.add('info-img');
    
    container.appendChild(img)


    const textContainer = document.getElementById('text-container');

    const title = document.createElement('h1');
    const textTitle = document.createTextNode('Name: ' + array.name);
    title.appendChild(textTitle);

    const infoContainer = document.createElement('div')


    createListElement(infoContainer,)
    

    textContainer.append(title, infoContainer)
}



function requestData() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(result => displayObject(result))
}




requestData();