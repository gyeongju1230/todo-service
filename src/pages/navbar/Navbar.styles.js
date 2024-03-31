import styled, { keyframes } from "styled-components";

const smallViewport = "62rem";

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: ${(props) => props.theme.colors.bgColor};

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
    transform: scale(1.3);
  }
`;

export const Title = styled.a`
  color: ${(props) => props.theme.colors.titleColor};
  font-size: 30px;
  font-weight: bold;
`;

export const SidebarContent = styled.div`
  position: fixed;
  width: 208px;
  top: 0;
  padding-top: 40px;
  padding-left: 20px;
  left: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "-208px")};
  bottom: 0;
  animation: ${({ sidebarOpen }) => (sidebarOpen ? slideIn : slideOut)} 0.3s
    ease;
  transition: left 0.3s ease;
  background: ${(props) => props.theme.colors.bgColor};
  @media (max-width: ${smallViewport}) {
    width: 108px;
    padding-top: 20px;
    padding-left: 10px;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 100px;

  @media (max-width: ${smallViewport}) {
    margin-top: 100px;
  }
`;

export const MenuBox = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const AllBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #b6b6b5;

  @media (max-width: ${smallViewport}) {
    width: 24px;
    height: 24px;
  }
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
  color: ${(props) => props.theme.colors.titleColor};
  font-size: 20px;
  font-weight: bold;

  @media (max-width: ${smallViewport}) {
    margin-left: 4px;
    font-size: 12px;
  }
`;

export const DarkOff = styled.button`
  position: absolute;
  transform: translateX(calc(50% + (84px - 38px)));
  bottom: 40px;
  padding: 0;
  margin: 0;
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: ${smallViewport}) {
    transform: translateX(calc(50% + (44px - 38px)));
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
