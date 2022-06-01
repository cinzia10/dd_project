const BASE_URL = 'https://www.dnd5eapi.co/api/races';

let array = [];

function goToPage(id) {
    let urlString = '/prova.html'
   console.log(id)
    if (id) {
        urlString = urlString + '?id=' + id
    }
           window.location.href = urlString
}

function itpage(obj) {
    array = Object.values(obj)[1];
    display(array)
}

function display(array) {
   const container = document.getElementById('container-information') 
   for (const page of array) {
       const div = document.createElement('div')
       div.classList.add('card')
       const span = document.createElement('span')
       const node = document.createTextNode(page.name)
       span.onclick = () => goToPage(page.url)
       span.appendChild(node)
       div.appendChild(span)

       container.appendChild(div)
   }
}


function api() {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(resalt => itpage(resalt))
}




api()