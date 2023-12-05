import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../App";
import { EditTodo } from "./EditTodo";
// import { EditTodo } from "./EditTodo";

export const Todo = () => {
  const { value, todos, setTodos, search } = useContext(AppContext);
  console.log("TODO", todos);

  const [editingTodo, setEditingTodo] = useState(null);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const editTodo = (id) => {
    setEditingTodo(id);
  };

  const closeEditTodo = () => {
    setEditingTodo(null);
  };

  return (
    <div className="Todo">
      {todos
        .filter((value) => {
          if (search === "") {
            return true;
          } else {
            return value.task
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
          }
        })
        .map((task) => (
          <div key={task.id} className="todo-item">
            {editingTodo === task.id ? (
              <EditTodo todoId={task.id} onClose={closeEditTodo} />
            ) : (
              <>
                <p
                  onClick={() => toggleComplete(task.id)}
                  className={`${task.completed ? "completed" : ""}`}
                >
                  {task.task}
                </p>
                <div className="todo-icons">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="icon-edit"
                    onClick={() => editTodo(task.id)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteTodo(task.id)}
                    className="icon-remove"
                  />
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

// const toggleComplete = (id) => {
//   setTodos(
//     todos.map((todo) => {
//       return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
//     })
//   );
// };

// const deleteTodo = (id) => {
//   setTodos(
//     todos.filter((todo) => {
//       return todo.id !== id;
//     })
//   );
// };

// const editTodo = (id) => {
//   setTodos(
//     todos.map((todo) => {
//       return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
//     })
//   );
// };

// return (
//   <div className="Todo">
//     {todos.map((task) => (
//       <div key={task.id} className="todo-item">
//         <p
//           onClick={() => toggleComplete(task.id)}
//           className={`${task.completed ? "completed" : ""}`}
//         >
//           {task.task}
//         </p>
//         <div className="todo-icons">
//           <FontAwesomeIcon
//             icon={faPenToSquare}
//             className="icon-edit"
//             onClick={() => editTodo(task.id)}
//           />
//           <FontAwesomeIcon
//             icon={faTrash}
//             onClick={() => deleteTodo(task.id)}
//             className="icon-remove"
//           />
//         </div>
//       </div>
//     ))}
//   </div>
// );
// };
