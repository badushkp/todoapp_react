import React from "react";
import style from "./footer.module.css";

function Footer({ completedTodos, uncompletedTodos }) {
  return (
    <div className={style.footer}>
      <span>Completed Todos:{completedTodos}</span>
      <span>Uncompleted Todos:{uncompletedTodos}</span>
    </div>
  );
}

export default Footer;
