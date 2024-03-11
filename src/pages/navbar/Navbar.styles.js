import styled, { keyframes } from "styled-components";

const smallViewport = "62rem";

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: #ffffff;

  @media (max-width: ${smallViewport}) {
    flex-direction: column;
    position: static;
    top: auto;
    width: auto;
    z-index: auto;
  }
`;

export const Sidebar = styled.button`
  position: absolute;
  left: 30px;
  transform: translateX(-50%);
  padding: 0;
  margin: 0;
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  .menu-icon {
    transition: transform 0.3s ease;
  }

  .menu-icon:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.a`
  color: #8c8c8c;
  font-size: 30px;
  font-weight: bold;
`;

export const SidebarContent = styled.div`
  position: fixed;
  width: 208px;
  top: 80px;
  padding-top: 140px;
  padding-left: 20px;
  left: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "-208px")};
  bottom: 0;
  animation: ${({ sidebarOpen }) => (sidebarOpen ? slideIn : slideOut)} 0.3s
    ease;
  transition: left 0.3s ease;
  background: #ffffff;

  @media (max-width: ${smallViewport}) {
    width: 108px;
    padding-top: 70px;
    padding-left: 10px;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const InProgressBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fff2bf;

  @media (max-width: ${smallViewport}) {
    width: 24px;
    height: 24px;
  }
`;

export const CompletedBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #ffe1e4;

  @media (max-width: ${smallViewport}) {
    width: 24px;
    height: 24px;
  }
`;

export const MenuName = styled.a`
  margin-left: 20px;
  color: #8c8c8c;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: ${smallViewport}) {
    margin-left: 10px;
  }
`;

export const DarkOff = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 60px;
  bottom: 100px;

  @media (max-width: ${smallViewport}) {
    left: 30px;
    bottom: 50px;
  }
`;

const slideIn = keyframes`
  from {
    left: -208px;
  }
  to {
    left: 0;
  }
`;

const slideOut = keyframes`
  from {
    left: 0;
  }
  to {
    left: -208px;
  }
`;
