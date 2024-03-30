import "./App.css";
import Navbar from "./pages/navbar/Navbar";
import { Outlet } from "react-router-dom";
import TodoList from "./pages/todo-list/TodoList";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checkedSections, setCheckedSections] = useState({});
  const [filter, setFilter] = useState("");
  const [themeMode, toggleTheme] = useTheme();
  const theme = themeMode === "light" ? light : dark;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setFilter={setFilter}
          toggleTheme={toggleTheme}
          themeMode={themeMode}
        />
        <Outlet />
        <TodoList
          sidebarOpen={sidebarOpen}
          checkedSections={checkedSections}
          setCheckedSections={setCheckedSections}
          filter={filter}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
