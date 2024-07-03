import React, { useState } from 'react';
import './Todo.css'; // Assuming you have a CSS file for styling
import Alert from './Alert'; // Import the custom Alert component

function Todo() {
  const [data, setData] = useState('');
  const [todo, setTodo] = useState([]);
  const [alert, setAlert] = useState({ message: '', type: '' });

  const changeInput = (e) => {
    setData(e.target.value);
  };

  const addTodo = () => {
    if (data.trim().length > 0) {
      setTodo((prevTodo) => {
        const updatedList = [...prevTodo, data];
        setData('');
        return updatedList;
      });
      setAlert({ message: 'Todo added successfully!', type: 'success' });
    } else {
      setAlert({ message: 'Oops! Some input is required', type: 'error' });
    }
  };

  const deleteList = (index) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
    setAlert({ message: 'Todo deleted successfully!', type: 'success' });
  };

  const deleteAll = () => {
    setTodo([]);
    setAlert({ message: 'All todos deleted successfully!', type: 'success' });
  };

  return (
    <>
      <div className="container">
        <h1>Todo</h1>
        {alert.message && <Alert message={alert.message} type={alert.type} />}
        <div className="top">
          <div className="header">
            <input
              type="text"
              placeholder="Add a todo"
              className="input"
              value={data}
              onChange={changeInput}
            />
          </div>
          <div className="addbtn">
            <button id="add" onClick={addTodo}>Add</button>
          </div>
        </div>
        <div className="bottom">
          <p id="msg">Please add your ToDo :)</p>
          <ul>
            {todo.map((item, index) => (
              <div className="list" key={index}>
                <li>{item}</li>
                <button id="btn-del" onClick={() => deleteList(index)}>Delete</button>
              </div>
            ))}
          </ul>
          {todo.length > 0 && (
            <button id="btn-delAll" onClick={deleteAll}>Delete All</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Todo;
