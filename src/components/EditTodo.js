import React, { useContext, useMemo } from "react";
import { AppContext } from "../App";

export const EditTodo = ({ todoId, onClose }) => {
  const { todos, setTodos, value, setValue } = useContext(AppContext);

  const editTodo = (id, newTodo) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, task: newTodo } : item
    );
    setTodos(updatedTodos);
    onClose(); // Close the edit form
  };

  const handleSubmit = useMemo(
    () => (e) => {
      if (value === "") {
        e.preventDefault();
        alert("Please enter a value");
      } else {
        e.preventDefault();
        editTodo(todoId, value);
        setValue("");
        onClose(); // Close the edit form
      }
    },
    [value, todoId, setValue, editTodo, onClose]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update task"
        className="todo-update"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};
