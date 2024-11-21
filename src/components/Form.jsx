import React, { useState } from "react";
import style from "./form.module.css";

function Form({ todos, setTodos }) {
  //   const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };
  return (
    <div>
      <form className={style.todoform} onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <input
            className={style.modernInput}
            placeholder="Enter Todo Item...."
            onChange={(e) => {
              setTodo({ name: e.target.value, done: false });
            }}
            value={todo.name}
            type="text"
          />
          <button className={style.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
