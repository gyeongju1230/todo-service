import { Link } from "react-router-dom";
import * as styles from "./Navbar.styles";
import { ReactComponent as SideMenu } from "../../assets/icon/Sidebar.svg";
import { ReactComponent as SideMenuClose } from "../../assets/icon/CloseButton.svg";
import { ReactComponent as DarkModeOff } from "../../assets/icon/DarkModeOff.svg";
import { useEffect, useState } from "react";

const Navbar = ({ sidebarOpen, setSidebarOpen, setFilter }) => {
  const [_, setActiveMenu] = useState("all");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setFilter(menu);
  };

  useEffect(() => {
    setFilter("all");
  }, []);

  return (
    <styles.Header>
      <styles.Sidebar onClick={toggleSidebar} sidebarOpen={sidebarOpen}>
        {sidebarOpen ? (
          <SideMenuClose className="menu-icon" />
        ) : (
          <SideMenu className="menu-icon" />
        )}
      </styles.Sidebar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <styles.Title>todo</styles.Title>
      </Link>
      {sidebarOpen && (
        <styles.SidebarContent sidebarOpen={sidebarOpen}>
          <styles.Sidebar onClick={toggleSidebar} sidebarOpen={sidebarOpen}>
            <SideMenuClose className="menu-icon" />
          </styles.Sidebar>
          <styles.ButtonBox>
            <styles.MenuBox onClick={() => handleMenuClick("all")}>
              <styles.AllBox /> <styles.MenuName>All</styles.MenuName>
            </styles.MenuBox>
            <styles.MenuBox onClick={() => handleMenuClick("active")}>
              <styles.InProgressBox /> <styles.MenuName>Active</styles.MenuName>
            </styles.MenuBox>
            <styles.MenuBox onClick={() => handleMenuClick("completed")}>
              <styles.CompletedBox />
              <styles.MenuName>Completed</styles.MenuName>
            </styles.MenuBox>
          </styles.ButtonBox>
          <styles.DarkOff>
            <DarkModeOff />
          </styles.DarkOff>
        </styles.SidebarContent>
      )}
    </styles.Header>
  );
};

export default Navbar;
