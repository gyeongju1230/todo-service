import { Link } from "react-router-dom";
import * as styles from "./Navbar.styles";
import { ReactComponent as SideMenu } from "../../assets/icon/Sidebar.svg";
import { ReactComponent as SideMenuClose } from "../../assets/icon/CloseButton.svg";
import { ReactComponent as DarkModeOff } from "../../assets/icon/DarkModeOff.svg";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
            <styles.MenuBox>
              <styles.InProgressBox /> <styles.MenuName>진행중</styles.MenuName>
            </styles.MenuBox>
            <styles.MenuBox>
              <styles.CompletedBox /> <styles.MenuName>완료</styles.MenuName>
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
