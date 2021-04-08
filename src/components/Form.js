import { useState } from "react";
import TodoLi from "./TodoLi";

function Form() {
  const todoList = [];
  const [item, setItem] = useState("");
  const [list, setList] = useState(todoList);
  function addTodo(e) {
    e.preventDefault();
    setList((list) => [...list, item]);
    setItem("");
  }
  return (
    <div>
      <form className="form">
        <input
          className="todo-input"
          type="text"
          placeholder="Enter a task to be done"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <button className="todo-button" type="submit" onClick={addTodo}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      <div className="todo-container">
        <ul className="todo-list">
          <TodoLi list={list} />
        </ul>
      </div>
    </div>
  );
}

export default Form;
