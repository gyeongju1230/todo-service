import styled from "styled-components";

const smallViewport = "62rem";

export const TodoBox = styled.div`
  position: relative;
  height: 240px;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: #ffffff;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    margin-left: 0;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 42px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  width: 90%;
  height: 42px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

export const Title = styled.a`
  color: #8c8c8c;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${smallViewport}) {
    font-size: 15px;
  }
`;

export const MoreButtonBox = styled.div`
  width: 40px;
  height: 40px;
  padding-right: 10px;
`;

export const Button = styled.button`
  padding: 0;
  margin: 0;
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 163px;
  display: flex;
  justify-content: center;
  background: #ffffff;
`;

export const DescriptionBox = styled.p`
  width: 100%;
  margin: 0;
  padding: 10px;
  color: #8c8c8c;
  font-size: 17px;
  overflow-y: auto;
  word-wrap: break-word;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${smallViewport}) {
    font-size: 15px;
  }
`;

export const CheckBoxContainer = styled.div`
  width: 100%;
  height: 35px;
`;

export const UnCheckBox = styled.button`
  position: absolute;
  width: 122px;
  height: 26px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;

  appearance: none;
  border: none;
  cursor: pointer;
`;

export const CheckBox = styled.button`
  position: absolute;
  width: 70px;
  height: 26px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;

  appearance: none;
  border: none;
  cursor: pointer;
`;

export const CheckText = styled.p`
  margin: 0;
  color: #8c8c8c;
  font-size: 16px;
  font-weight: bold;
`;

export const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 130px;
  height: 80px;
  top: 30px;
  right: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);
  background: #fff;
  z-index: 2;

  @media (max-width: ${smallViewport}) {
    width: ${({ sidebarOpen }) => (sidebarOpen ? "80px" : "130px")};
    height: ${({ sidebarOpen }) => (sidebarOpen ? "60px" : "80px")};
    top: ${({ sidebarOpen }) => (sidebarOpen ? "31px" : "30px")};
    right: ${({ sidebarOpen }) => (sidebarOpen ? "7px" : "10px")};
  }
`;

export const EditBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 0.1px solid #8c8c8c;

  @media (max-width: ${smallViewport}) {
    height: ${({ sidebarOpen }) => (sidebarOpen ? "30px" : "40px")};
  }
`;

export const DeleteBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 0.1px solid #8c8c8c;

  @media (max-width: ${smallViewport}) {
    height: ${({ sidebarOpen }) => (sidebarOpen ? "30px" : "40px")};
  }
`;

export const ModalButton = styled.button`
  padding: 0;
  margin: 0;
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  color: #8c8c8c;
  font-size: 18px;
  font-weight: bold;
  margin: 0;

  @media (max-width: ${smallViewport}) {
    font-size: ${({ sidebarOpen }) => (sidebarOpen ? "16px" : "18px")};
  }
`;
export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  align-content: center;
  background: rgba(45, 45, 45, 0.3);
`;

export const EditModal = styled.div`
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

export const EditTitleText = styled.p`
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

export const EditTitleBox = styled.div`
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

export const EditTitleInput = styled.input`
  width: 95%;
  outline: none;
  border: none;
`;

export const EditDescriptionText = styled.p`
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

export const EditDescriptionBox = styled.div`
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

export const EditDescriptionInput = styled.input`
  width: 95%;
  height: 130px;
  outline: none;
  border: none;

  @media (max-width: ${smallViewport}) {
    height: 70px;
  }
`;

export const ButtonBox = styled.div`
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

export const EditDeleteButton = styled.button`
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

export const Text = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${smallViewport}) {
    font-size: 12px;
  }
`;

export const DeleteModal = styled.div`
  position: absolute;
  width: 366px;
  height: 255px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: #ffffff;

  @media (max-width: ${smallViewport}) {
    width: 210px;
    height: 140px;
  }
`;

export const DeleteModalContent = styled.p`
  color: #8c8c8c;
  font-size: 18px;
  font-weight: bold;
  margin-top: 80px;

  @media (max-width: ${smallViewport}) {
    font-size: 15px;
    margin-top: 45px;
  }
`;
