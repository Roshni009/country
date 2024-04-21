import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
   let [todos, setTodos] = useState([{task: "sample-task" , id: uuidv4(), isDone: false}]);
   let [newTodo, setNewTodo] = useState("");
  

   let addNewTask = () => {
      setTodos((prevTodos) => {
         return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
      });
      setNewTodo("");
   };

   let updateTodoValue = (event) => {
      setNewTodo(event.target.value);
   }

   let deleteTodo = (id) => {
     setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
   };

   let upperCaseAll = () => {
     setTodos((prevtodos) => (
       prevtodos.map((todo) => {
        return {
         ...todo,
         task: todo.task.toUpperCase(),
        };

      })
     ));
   };

   let UpperCaseOne = (id) => {
      setTodos((prevtodos) => 
         prevtodos.map((todo) => {
            if(todo.id == id) {
          return {
           ...todo,
           task: todo.task.toUpperCase(),
          };
        }
          else {
            return todo;
          }

         })
      );
     
   };

   let markAsDone = (id) => {
      setTodos((prevtodos) => 
         prevtodos.map((todo) => {
            if(todo.id == id) {
          return {
           ...todo,
           isDone: true,
          };
        }
          else {
            return todo;
          }

         })
      );
  };

  let allMarkAsDone= () => {
   setTodos((prevtodos) => (
     prevtodos.map((todo) => {
      return {
       ...todo,
       isDone: true,
      };

    })
   ));
 };

      

    return (
        <div>
            <input placeholder="add a task "  value={newTodo} onChange={updateTodoValue}/>
            <br /> <br />
            <button onClick={addNewTask} >Add Task</button>
            <br /> <br /><br /><br />

            <hr />
            <h4>Tasks Todo</h4>  
            <ul className="p1">
               {todos.map((todo) => (
                  <li key={todo.id} >
                     <span className="change-text" style={todo.isDone ? {textDecorationLine: "line-through"} : {}}> {todo.task}</span>
                     &nbsp; &nbsp; &nbsp;
                     <button onClick={ () => deleteTodo(todo.id)}>Delete</button>
                     &nbsp; &nbsp;
                     <button onClick={ () => UpperCaseOne(todo.id)}>UpperCase One</button>
                     &nbsp; &nbsp;
                     <button onClick={ () =>markAsDone(todo.id)}>Mark As Done</button>
                  </li>
               ))} 
            </ul>
            <br /> <br />
            <button onClick={upperCaseAll}>UpperCase All</button>
            &nbsp; &nbsp;
            <button onClick={allMarkAsDone}>All Mark As Done</button>
            </div>
    )}
          