const BASE_URL = 'https://www.dnd5eapi.co/api/races'

const array = [];

function initPage(element) {
    array = element.map(obj => Todo.fromDbObj(obj));
    array.sort(Todo.orderTodoByPriority)
}


function loadPg() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(result => console.log(result))
    //.catch(error => stopLoading())
  }

  loadPg()