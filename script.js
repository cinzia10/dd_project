const param = parsUrlParams()

const BASE_URL = 'https://www.dnd5eapi.co/api/races/' + param.id;

let array = [];


//// FUNCTION CHE CONTROLLA L'ID DELLA PAGINA
function parsUrlParams() {
    const urlSerchParams = new URLSearchParams(window.location.search)
     const param = Object.fromEntries(urlSerchParams)
     return param;      
}



function displayObject(obj) {
    array = Object(obj);
    display(array)
}

function display(array) {
    console.log(array);
    const pg = document.getElementById('container-character');


    const title = document.createElement('h1')
    const textTitle = document.createTextNode(array.name)
    title.appendChild(textTitle)
    pg.appendChild(title)
    const img = document.createElement('img')
       img.src = './assets/' + array.index + ".png" 
       img.classList.add('pg-img')
    pg.appendChild(img)

    const list = document.createElement('ul')
    list.classList.add('list')
    const size = document.createElement('p')
    const nodesize = document.createTextNode('Size: ' + array.size + ', ' + array.size_description)
    size.classList.add('size-list')
    const traits = document.createElement('p')
    const nodeatraits = document.createTextNode('Traits: ' + array.traits)
    traits.classList.add('traits-list')
    const language = document.createElement('p')
    const nodealanguage = document.createTextNode('Languages: ' + array.language_desc)
    language.classList.add('language-list')
    size.appendChild(nodesize)
    traits.appendChild(nodeatraits)
    language.appendChild(nodealanguage)
    list.appendChild(nodesize)
    list.appendChild(nodeatraits)
    list.appendChild(nodealanguage)
    pg.appendChild(size)
    pg.appendChild(traits)
    pg.appendChild(language)
    pg.appendChild(list)

    const alignment = document.createElement('p')
    const nodealignment = document.createTextNode(array.alignment)
    alignment.appendChild(nodealignment)
    pg.appendChild(alignment)
    

    const age = document.createElement('p')
    const textage = document.createTextNode(array.age)
    age.appendChild(textage)
    pg.appendChild(age)

 

}



function requestData() {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(result => displayObject(result))
}




requestData();