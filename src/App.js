import "./App.css";
import Navbar from "./pages/navbar/Navbar";
import { Outlet } from "react-router-dom";
import TodoList from "./pages/todo-list/TodoList";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Outlet />
      <TodoList sidebarOpen={sidebarOpen} />
    </>
  );
}

export default App;
