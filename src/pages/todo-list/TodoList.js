import * as styles from "./TodoList.styles";
import { useState } from "react";
import { ReactComponent as CreateButton } from "../../assets/icon/CreateButton.svg";
import TodoBox from "./todo-box/TodoBox";

const TodoList = ({ sidebarOpen }) => {
  const [moreModalOpen, setMoreModalOpen] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  const closeModal = () => {
    if (moreModalOpen) {
      setMoreModalOpen(false);
    }
  };

  const createModalOpen = () => {
    setCreateModal(!createModal);
  };

  const createModalClose = () => {
    if (createModal) {
      setCreateModal(false);
    }
  };

  return (
    <styles.Container sidebarOpen={sidebarOpen} onClick={closeModal}>
      <TodoBox
        sidebarOpen={sidebarOpen}
        moreModalOpen={moreModalOpen}
        setMoreModalOpen={setMoreModalOpen}
      />
      <styles.CreateButtonBox onClick={createModalOpen}>
        <CreateButton />
      </styles.CreateButtonBox>
      {createModal && (
        <styles.CreateModalContainer>
          <styles.CreateModal>
            <styles.CreateTitleText>Title</styles.CreateTitleText>
            <styles.CreateTitleBox>
              <styles.CreateTitleInput />
            </styles.CreateTitleBox>
            <styles.CreateDescriptionText>
              Description
            </styles.CreateDescriptionText>
            <styles.CreateDescriptionBox>
              <styles.CreateDescriptionInput />
            </styles.CreateDescriptionBox>
            <styles.CreateButton>
              <styles.CancelBox onClick={createModalClose}>
                <styles.CancelText>Cancel</styles.CancelText>
              </styles.CancelBox>
              <styles.Create>
                <styles.CreateText>Create</styles.CreateText>
              </styles.Create>
            </styles.CreateButton>
          </styles.CreateModal>
        </styles.CreateModalContainer>
      )}
    </styles.Container>
  );
};

export default TodoList;
