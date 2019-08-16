const todos = [];
 function showTodoList() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
         list.innerHTML += `<li>
                              ${todos[i]}
                              <button onclick="deleteTodos(${i})">DELL</button>
                           </li>`;       
    }
 }

 function addTodo() {
   const newTodo = document.getElementById('todoInput').value;
   if(newTodo === '') {
      return;
   }
   console.log(newTodo);
   todos.push(newTodo);
   showTodoList();
   document.getElementById('todoInput').value = '';
 }

 function deleteTodos(i) {
   todos.splice(i, 1);
   showTodoList();
 }