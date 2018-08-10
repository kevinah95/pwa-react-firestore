import React from "react";

const TodoItem = ({ todo, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: todo.completed ? "line-through" : "none"
      }}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;