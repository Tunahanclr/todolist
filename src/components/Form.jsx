import React from "react";

export default function Form({
  setİnputText,
  inputText,
  todos,
  setTodos,
  setStatus,
}) {
  const inputTextHandle = (e) => {
    setİnputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setİnputText("");
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() },
    ]);
    console.log(todos);
  };

  return (
    <form>
      <div className="search">
        <input
          value={inputText}
          onChange={inputTextHandle}
          type="text"
          className="todo-input"
          placeholder="Add..."
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
      <div className="select">
        <select name="todos" id="filter-todo" onChange={statusHandler}>
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
}
