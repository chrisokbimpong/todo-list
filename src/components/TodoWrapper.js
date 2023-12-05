import React from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { useContext } from "react";
import { AppContext } from "../App";
import { Search } from "./Search";

export const TodoWrapper = () => {
  const { todos } = useContext(AppContext);

  return (
    <div className="TodoWrapper">
      <Search />
      <h1>Tasks For Today</h1>

      <TodoForm />
      <Todo />
    </div>
  );
};
