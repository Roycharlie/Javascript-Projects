 
let todoArray =[];

const savedinfo = localStorage.getItem('todolist3');
if (savedinfo) {
  todoArray = JSON.parse(savedinfo)
}

finalRender()

function finalRender(){

let todoLISTHTML = ''; 

for (t = 0; t < todoArray.length; t++) {
    const renderedObject = todoArray[t];
    const {name, duedate} = renderedObject;

    const HTML4 = `
    <div class= "grid1">
    <div>${name}</div> 
    <div>${duedate}</div> 
    <button onclick="
    todoArray.splice(${t}, 1)
    localStorage.setItem('todolist3', JSON.stringify(todoArray))
    finalRender()"
    class="remove-button">Remove</button></p>
    </div>`;
    todoLISTHTML += HTML4;
  }

    document.querySelector('.display')
    .innerHTML = todoLISTHTML;
    document.querySelector('.dates')
}

 
function myTodo() {
  const valueElement=document.querySelector('.putDetail')
  const name = valueElement.value;
  const dateInputElement = document.querySelector('.dates');
  const duedate = dateInputElement.value;

  todoArray.push({
    name,
    duedate
  });

  localStorage.setItem('todolist3', JSON.stringify(todoArray))

  valueElement.value = '';

  finalRender()

    
}
