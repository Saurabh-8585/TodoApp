import './App.css';
import React, { useState } from 'react'
import TodoFrom from './components/TodoFrom';
import TodoList from './components/TodoList.js';
const App = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([]);
  const [editId, seteditId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();


    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos =
        todos.map((t) => t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
        );

      setTodos(updatedTodos);
      seteditId(0);
      setTodo("");
      return;
    }



    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo("");
    }
  }

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
    setTodo("");
  }
  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    seteditId(id);
  }


  return (
    <div className="app">
      <div className="container">
        <h1
          style={{
            color: "#8533ff",
            marginBottom: "20px"
          }}>Todo List</h1>

        <TodoFrom
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
          editId={editId} />

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
