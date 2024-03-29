import * as styles from "./TodoList.styles";
import { useState } from "react";
import { ReactComponent as CreateButton } from "../../assets/icon/CreateButton.svg";
import TodoBox from "../../components/todo-box/TodoBox";
import { TodoExample } from "../../data/TodoExample";

const TodoList = ({
  sidebarOpen,
  checkedSections,
  setCheckedSections,
  filter,
}) => {
  const [moreModalOpen, setMoreModalOpen] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

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

  const handleCreate = () => {
    const trimmedTitle = todoTitle.trim();
    const trimmedDescription = todoDescription.trim();

    if (!trimmedTitle) {
      alert("Todo Title을 입력해주세요! 📝");
      return;
    }

    const newSectionKey = `section${Object.keys(TodoExample).length + 1}`;
    TodoExample[newSectionKey] = {
      title: trimmedTitle,
      content: trimmedDescription,
    };

    setTodoTitle("");
    setTodoDescription("");
    setCreateModal(false);
  };

  return (
    <styles.Container sidebarOpen={sidebarOpen} onClick={closeModal}>
      <TodoBox
        sidebarOpen={sidebarOpen}
        moreModalOpen={moreModalOpen}
        setMoreModalOpen={setMoreModalOpen}
        checkedSections={checkedSections}
        setCheckedSections={setCheckedSections}
        filter={filter}
      />
      <styles.CreateButtonBox onClick={createModalOpen}>
        <CreateButton />
      </styles.CreateButtonBox>
      {createModal && (
        <styles.CreateModalContainer>
          <styles.CreateModal>
            <styles.CreateTitleText>Title</styles.CreateTitleText>
            <styles.CreateTitleBox>
              <styles.CreateTitleInput
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
              />
            </styles.CreateTitleBox>
            <styles.CreateDescriptionText>
              Description
            </styles.CreateDescriptionText>
            <styles.CreateDescriptionBox>
              <styles.CreateDescriptionInput
                value={todoDescription}
                onChange={(e) => setTodoDescription(e.target.value)}
              />
            </styles.CreateDescriptionBox>
            <styles.CreateButton>
              <styles.CancelBox onClick={createModalClose}>
                <styles.CancelText>Cancel</styles.CancelText>
              </styles.CancelBox>
              <styles.Create onClick={handleCreate}>
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
