import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../App";

uuidv4();

export const TodoForm = () => {
  const { todos, setTodos, value, setValue } = useContext(AppContext);

  const addTodo = (todo) => {
    if (todo !== "") {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  console.log(todos);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please add task"
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
