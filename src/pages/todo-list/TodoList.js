// Fixme. todo title 글자 수 14자 제한 뒤는 .. 처리, 앱에서는 9자 제한

import * as styles from "./TodoList.styles";
import { useState } from "react";
import { ReactComponent as MoreButton } from "../../assets/icon/MoreButton.svg";
import { ReactComponent as CreateButton } from "../../assets/icon/CreateButton.svg";

const TodoList = ({ sidebarOpen }) => {
  const [moreModalOpen, setMoreModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggleModal = () => {
    setMoreModalOpen(!moreModalOpen);
  };

  const closeModal = () => {
    if (moreModalOpen) {
      setMoreModalOpen(false);
    }
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
    setMoreModalOpen(false);
  };

  const closeEditModal = () => {
    if (editModal) {
      setEditModal(false);
    }
  };

  return (
    <styles.Container sidebarOpen={sidebarOpen} onClick={closeModal}>
      <styles.TodoBox sidebarOpen={sidebarOpen}>
        <styles.TitleContainer>
          <styles.TitleBox>
            <styles.Title>제목이 들어갈 자리..</styles.Title>
          </styles.TitleBox>
          <styles.MoreButtonBox>
            <styles.Button onClick={toggleModal}>
              <MoreButton />
            </styles.Button>
          </styles.MoreButtonBox>
        </styles.TitleContainer>
        {moreModalOpen && (
          <styles.Modal moreModalOpen={moreModalOpen} sidebarOpen={sidebarOpen}>
            <styles.EditBox sidebarOpen={sidebarOpen} onClick={toggleEditModal}>
              <styles.ModalButton>
                <styles.ButtonText sidebarOpen={sidebarOpen}>
                  Edit
                </styles.ButtonText>
              </styles.ModalButton>
            </styles.EditBox>
            <styles.DeleteBox sidebarOpen={sidebarOpen}>
              <styles.ModalButton>
                <styles.ButtonText sidebarOpen={sidebarOpen}>
                  Delete
                </styles.ButtonText>
              </styles.ModalButton>
            </styles.DeleteBox>
          </styles.Modal>
        )}

        {editModal && (
          <styles.ModalContainer>
            <styles.EditModal>
              <styles.EditTitleText>Title</styles.EditTitleText>
              <styles.EditTitleBox>
                <styles.EditTitleInput />
              </styles.EditTitleBox>
              <styles.EditDescriptionText>
                Description
              </styles.EditDescriptionText>
              <styles.EditDescriptionBox>
                <styles.EditDescriptionInput />
              </styles.EditDescriptionBox>
              <styles.EditButtonBox>
                <styles.CancelBox onClick={closeEditModal}>
                  <styles.CancelText>Cancel</styles.CancelText>
                </styles.CancelBox>
                <styles.CreateBox>
                  <styles.CreateText>Edit</styles.CreateText>
                </styles.CreateBox>
              </styles.EditButtonBox>
            </styles.EditModal>
          </styles.ModalContainer>
        )}
      </styles.TodoBox>
      <styles.CreateButtonBox>
        <CreateButton />
      </styles.CreateButtonBox>
    </styles.Container>
  );
};

export default TodoList;
