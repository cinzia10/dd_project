const BASE_URL = 'https://www.dnd5eapi.co/api/races';

let array = [];

function goToPage(id) {
    let urlString = '/race.html';
   console.log(id)
    if (id) {
        urlString = urlString + '?id=' + id;
    }
           window.location.href = urlString;
}

function itpage(obj) {
    array = Object.values(obj)[1];
    display(array);
}

function display(array) {
   const container = document.getElementById('container-information');

   for (const page of array) {
       
       const div = document.createElement('div');
       div.onclick = () => goToPage(page.index);

       div.classList.add('card');

       

       const img = document.createElement('img');
       img.src = './assets/' + page.index + ".png";
       img.style.display = 'block'

       div.appendChild(img);

       const name = document.createElement('p');
       const node = document.createTextNode(page.name);
       
       name.appendChild(node);
       div.appendChild(name);
       

       container.appendChild(div);
   }
}


function api() {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(resalt => itpage(resalt))
}




api()