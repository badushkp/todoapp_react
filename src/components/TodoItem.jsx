import React from "react";
import style from "./todoitem.module.css";

function TodoItem({ item, todos, setTodos }) {
  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo !== item));
  };

  const handleClick = () => {
    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const className = item.done ? `${style.item} ${style.completed}` : style.item;

  return (
    <div className={className}>
      <div className={style.itemName}>
        <span onClick={handleClick}>{item.name}</span>
        <button onClick={handleDelete} className={style.deleteButton}>
          X
        </button>
      </div>
      <hr className={style.line} />
    </div>
  );
}

export default TodoItem;
