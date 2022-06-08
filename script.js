const param = parsUrlParams()



const BASE_URL = 'https://www.dnd5eapi.co/api/races/' + param.id;

let array = [];

function parsUrlParams() {
    const urlSerchParams = new URLSearchParams(window.location.search)
     const param = Object.fromEntries(urlSerchParams)
     return param;  
    
}

function itpage(obj) {
    array = Object(obj);
    display(array)
}

function display(array) {
    console.log(array);
    const pg = document.getElementById('continer-pg');


    const title = document.createElement('h1')
    const textTitle = document.createTextNode(array.name)
    title.appendChild(textTitle)
    pg.appendChild(title)
    const img = document.createElement('img')
       img.src = './assets/' + array.index + ".png" 
       img.classList.add('pg-img')
    pg.appendChild(img)


    const size = document.createElement('p')
    const nodesize = document.createTextNode('Size: ' + array.size + ', ' + array.size_description)
    size.classList.add('list')
    const traits = document.createElement('p')
    const nodeatraits = document.createTextNode('Traits: ' + array.traits)
    traits.classList.add('list')
    const language = document.createElement('p')
    const nodealanguage = document.createTextNode('Languages: ' + array.language_desc)
    language.classList.add('list')
    const subraces = document.createElement('p')
    const nodesubraces = document.createTextNode('Subraces: ' + array.subraces)
    subraces.classList.add('list')
    
    size.appendChild(nodesize)
    traits.appendChild(nodeatraits)
    language.appendChild(nodealanguage)
    subraces.appendChild(nodesubraces)

    pg.appendChild(size)
    pg.appendChild(traits)
    pg.appendChild(language)
    pg.appendChild(subraces)


    const alignment = document.createElement('p')
    const nodealignment = document.createTextNode(array.alignment)
    alignment.appendChild(nodealignment)
    pg.appendChild(alignment)
    

    const age = document.createElement('p')
    const textage = document.createTextNode(array.age)
    age.appendChild(textage)
    pg.appendChild(age)

 

}



function api() {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(resalt => itpage(resalt))
}




api()