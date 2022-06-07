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
    const textTitle = document.createTextNode(array.name + array.size)
    title.appendChild(textTitle)
    pg.appendChild(title)
    const img = document.createElement('img')
       img.src = './assets/' + array.index + ".png" 
       img.classList.add('pg-img')
    pg.appendChild(img)

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