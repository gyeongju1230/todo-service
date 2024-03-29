import "./App.css";
import Navbar from "./pages/navbar/Navbar";
import { Outlet } from "react-router-dom";
import TodoList from "./pages/todo-list/TodoList";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checkedSections, setCheckedSections] = useState({});
  const [filter, setFilter] = useState("");

  return (
    <>
      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setFilter={setFilter}
      />
      <Outlet />
      <TodoList
        sidebarOpen={sidebarOpen}
        checkedSections={checkedSections}
        setCheckedSections={setCheckedSections}
        filter={filter}
      />
    </>
  );
}

export default App;
