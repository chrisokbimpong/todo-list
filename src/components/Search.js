import React, { useState, useContext } from "react";
import { AppContext } from "../App";

export const Search = () => {
  const { todos, setTodos, value, setValue, setSearch } =
    useContext(AppContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a task..."
        className="todo-input"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
