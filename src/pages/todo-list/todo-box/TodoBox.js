import * as styles from "./TodoBox.styles";
import { useState } from "react";
import { ReactComponent as MoreButton } from "../../../assets/icon/MoreButton.svg";

const TodoBox = ({ sidebarOpen, moreModalOpen, setMoreModalOpen }) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const toggleModal = () => {
    setMoreModalOpen(!moreModalOpen);
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

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
    setMoreModalOpen(false);
  };

  const closeDeleteModal = () => {
    if (deleteModal) {
      setDeleteModal(false);
    }
  };

  return (
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
          <styles.DeleteBox
            sidebarOpen={sidebarOpen}
            onClick={toggleDeleteModal}
          >
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
            <styles.EditDescriptionText>Description</styles.EditDescriptionText>
            <styles.EditDescriptionBox>
              <styles.EditDescriptionInput />
            </styles.EditDescriptionBox>
            <styles.ButtonBox>
              <styles.CancelBox onClick={closeEditModal}>
                <styles.CancelText>Cancel</styles.CancelText>
              </styles.CancelBox>
              <styles.EditDeleteButton>
                <styles.Text>Edit</styles.Text>
              </styles.EditDeleteButton>
            </styles.ButtonBox>
          </styles.EditModal>
        </styles.ModalContainer>
      )}

      {deleteModal && (
        <styles.ModalContainer>
          <styles.DeleteModal>
            <styles.DeleteModalContent>
              정말 삭제하시겠습니까?
            </styles.DeleteModalContent>
            <styles.ButtonBox>
              <styles.CancelBox onClick={closeDeleteModal}>
                <styles.CancelText>Cancel</styles.CancelText>
              </styles.CancelBox>
              <styles.EditDeleteButton>
                <styles.Text>Delete</styles.Text>
              </styles.EditDeleteButton>
            </styles.ButtonBox>
          </styles.DeleteModal>
        </styles.ModalContainer>
      )}
    </styles.TodoBox>
  );
};

export default TodoBox;
