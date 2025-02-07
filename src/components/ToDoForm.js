import React, { useState } from "react";

export const ToDoForm = () => {
  const [value, setValue] = useState("");
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task todays"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
