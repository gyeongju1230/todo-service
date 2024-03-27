import styled from "styled-components";

const smallViewport = "62rem";

export const Container = styled.div`
  position: absolute;
  padding: 20px;
  left: ${({ sidebarOpen }) => (sidebarOpen ? "228px" : "0")};
  transition: left 0.3s ease;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${smallViewport}) {
    left: ${({ sidebarOpen }) => (sidebarOpen ? "114px" : "0")};
  }
`;

export const CreateButtonBox = styled.button`
  position: fixed;
  width: 60px;
  height: 59px;
  right: 30px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);

  padding: 0;
  margin: 0;
  appearance: none;
  border: none;
  cursor: pointer;

  @media (max-width: ${smallViewport}) {
    right: 15px;
    bottom: 20px;
  }
`;

export const CreateModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  align-content: center;
  background: rgba(45, 45, 45, 0.3);
`;

export const CreateModal = styled.div`
  position: absolute;
  width: 640px;
  height: 480px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: #ffffff;

  @media (max-width: ${smallViewport}) {
    width: 320px;
    height: 270px;
  }
`;

export const CreateTitleText = styled.p`
  width: 80%;
  height: 24px;
  margin-top: 80px;
  margin-bottom: 10px;
  color: #8c8c8c;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${smallViewport}) {
    margin-top: 30px;
    margin-bottom: 5px;
    font-size: 15px;
  }
`;

export const CreateTitleBox = styled.div`
  width: 80%;
  height: 40px;
  padding-left: 10px;
  align-content: center;
  border: 1px solid #8c8c8c;
  border-radius: 10px;

  @media (max-width: ${smallViewport}) {
    height: 30px;
  }
`;

export const CreateTitleInput = styled.input`
  width: 95%;
  outline: none;
  border: none;
`;

export const CreateDescriptionText = styled.p`
  width: 80%;
  height: 24px;
  margin-top: 40px;
  margin-bottom: 10px;
  color: #8c8c8c;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${smallViewport}) {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 15px;
  }
`;

export const CreateDescriptionBox = styled.div`
  width: 80%;
  height: 140px;
  padding-left: 10px;
  align-content: center;
  border: 1px solid #8c8c8c;
  border-radius: 10px;
  display: flex;
  align-items: center;

  @media (max-width: ${smallViewport}) {
    height: 80px;
  }
`;

export const CreateDescriptionInput = styled.input`
  width: 95%;
  height: 130px;
  outline: none;
  border: none;

  @media (max-width: ${smallViewport}) {
    height: 70px;
  }
`;

export const CreateButton = styled.div`
  width: 289px;
  height: 42px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${smallViewport}) {
    width: 144.5px;
    height: 21px;
    margin-top: 20px;
  }
`;

export const CancelBox = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 0.5px solid #8c8c8c;
  background: #ffffff;
  appearance: none;
  cursor: pointer;
`;

export const CancelText = styled.p`
  color: #8c8c8c;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${smallViewport}) {
    font-size: 12px;
  }
`;

export const Create = styled.button`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: #8c8c8c;
  appearance: none;
  border: none;
  cursor: pointer;
`;

export const CreateText = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${smallViewport}) {
    font-size: 12px;
  }
`;
