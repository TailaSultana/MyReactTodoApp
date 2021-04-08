function TodoLi({ list }) {
  const myList = [...list];
  function completed(e) {
    const parent = e.target.parentNode;
    parent.className = parent.className === "completed" ? "todo" : "completed";
  }

  function fall(e) {
    const parent = e.target.parentNode;
    parent.className = "fall";
    parent.remove();
  }

  return (
    <div>
      {myList.map((item, i) => (
        <div className="todo">
          <li className="todo-li" key={i}>
            {item}
          </li>
          <button className="completeButton" onClick={(e) => completed(e)}>
            <i className="fas fa-check"></i>
          </button>
          <button className="trashButton" onClick={(e) => fall(e)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoLi;
