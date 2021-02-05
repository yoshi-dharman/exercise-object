let todos = [
    {id: 1, todo: "belajar coding"},
    {id: 2, todo: "nanti tidur"}
  ]

  function printAll(){
    todos.forEach(item=>{
        console.log(item.id+", "+item.todo);
    });
  }

  function printByID(id){
    console.log(todos[id-1].id+", "+todos[id-1].todo);
  }

  function add(newTodo){
    todos.push({id: todos.length+1, todo: newTodo});
    printAll();
  }

  function deleteByID(id){
    delete todos[id-1];
    printAll();
  }

  function updateByID(id,newTodo){
    todos[id-1].todo = newTodo;
    printAll();
  }

  printAll();
  printByID(1);
  add("Testing");
  deleteByID(2);
  updateByID(1,"belajar CRUD");