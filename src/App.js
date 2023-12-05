import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider
      value={{ todos, setTodos, value, setValue, search, setSearch }}
    >
      <div className="App">
        <TodoWrapper />
      </div>
    </AppContext.Provider>
  );
}

export default App;
