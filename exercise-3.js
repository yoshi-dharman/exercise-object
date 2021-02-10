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
    console.log("---print By ID---");
    todos.map((item, index, object) => {
      if(item.id == id){
        console.log(object[index].id+", "+object[index].todo);
      }
    });

    // console.log(todos[id-1].id+", "+todos[id-1].todo);
  }

  function add(newTodo){
    console.log("---ADD---");
    todos.push({id: todos.length+1, todo: newTodo});
    printAll();
  }

  function deleteByID(id){
    console.log("---delete---");
    todos.map((item, index, object) => {
      if(item.id == id){
        delete object[index];
      } 
    });

    // delete todos[id-1];
    printAll();
  }

  function updateByID(id,newTodo){
    console.log("---update---");
    todos.map((item, index, object) => {
      if(item.id == id){
        object[index].todo = newTodo;
      }
    });
    // todos[id-1].todo = newTodo;
    printAll();
  }

  printAll();
  printByID(1);
  add("Testing");
  deleteByID(2);
  updateByID(1,"belajar CRUD");