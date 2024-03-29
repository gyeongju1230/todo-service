import * as styles from "./TodoBox.styles";
import { useEffect, useState } from "react";
import { TodoExample } from "../../data/TodoExample";
import { ReactComponent as MoreButton } from "../../assets/icon/MoreButton.svg";
import { ReactComponent as UnCheck } from "../../assets/icon/UnCheckBox.svg";
import { ReactComponent as Check } from "../../assets/icon/CheckBox.svg";

const TodoBox = ({
  sidebarOpen,
  moreModalOpen,
  setMoreModalOpen,
  checkedSections,
  setCheckedSections,
  filter,
}) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [todoData, setTodoData] = useState(TodoExample);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let MAX_TITLE_LENGTH = windowWidth >= 992 ? 15 : 19;

  if (sidebarOpen && windowWidth >= 992) {
    MAX_TITLE_LENGTH = 12;
  }

  if (sidebarOpen && windowWidth < 992) {
    MAX_TITLE_LENGTH = 10;
  }

  const toggleModal = (sectionKey) => {
    setActiveSection(sectionKey === activeSection ? null : sectionKey);
    setMoreModalOpen(!moreModalOpen);
    setEditTitle(TodoExample[sectionKey].title);
    setEditDescription(TodoExample[sectionKey].content);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
    setMoreModalOpen(false);
  };

  const closeEditModal = () => {
    setEditModal(false);
    setActiveSection(null);
  };

  const toggleDeleteModal = (sectionKey) => {
    setActiveSection(sectionKey);
    setDeleteModal(!deleteModal);
    setMoreModalOpen(false);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
    setActiveSection(null);
  };

  const toggleCheckBox = (sectionKey) => {
    setCheckedSections({
      ...checkedSections,
      [sectionKey]: !checkedSections[sectionKey],
    });
  };

  const handleEdit = () => {
    const trimmedEditTitle = editTitle.trim();
    const trimmedEditDescription = editDescription.trim();

    if (!trimmedEditTitle) {
      alert("Todo Title을 입력해주세요! 📝");
      return;
    }

    TodoExample[activeSection].title = trimmedEditTitle;
    TodoExample[activeSection].content = trimmedEditDescription;

    setEditTitle("");
    setEditDescription("");
    closeEditModal();
  };

  const handleDelete = () => {
    const updatedData = { ...TodoExample };

    delete updatedData[activeSection];

    setTodoData(updatedData);

    const updatedCheckedSections = { ...checkedSections };
    delete updatedCheckedSections[activeSection];
    setCheckedSections(updatedCheckedSections);

    closeDeleteModal();
  };

  return Object.keys(todoData).map((sectionKey, index) => {
    const isChecked = checkedSections[sectionKey];
    const isCompleted = isChecked && filter === "completed";
    const isActive = !isChecked && filter === "active";

    if (filter === "all" || isCompleted || isActive) {
      return (
        <styles.TodoBox
          key={index}
          sidebarOpen={sidebarOpen}
          isCompleted={isCompleted}
          style={{
            flexBasis:
              windowWidth < 992 || Object.keys(todoData).length === 1
                ? "100%"
                : "calc(25% - 40px)",
          }}
        >
          <styles.TitleContainer
            style={
              checkedSections[sectionKey]
                ? { background: "#FFE1E4" }
                : { background: "#fff2bf" }
            }
          >
            <styles.TitleBox>
              <styles.Title
                style={
                  checkedSections[sectionKey]
                    ? { textDecorationLine: "line-through", fontWeight: "bold" }
                    : {}
                }
              >
                {todoData[sectionKey].title.length > MAX_TITLE_LENGTH
                  ? `${todoData[sectionKey].title.substring(0, MAX_TITLE_LENGTH)}..`
                  : todoData[sectionKey].title}
              </styles.Title>
            </styles.TitleBox>
            <styles.MoreButtonBox>
              <styles.Button onClick={() => toggleModal(sectionKey)}>
                <MoreButton />
              </styles.Button>
            </styles.MoreButtonBox>
          </styles.TitleContainer>
          <styles.DescriptionContainer>
            <styles.DescriptionBox>
              {todoData[sectionKey].content}
            </styles.DescriptionBox>
          </styles.DescriptionContainer>
          <styles.CheckBoxContainer>
            {checkedSections[sectionKey] ? (
              <styles.CheckBox onClick={() => toggleCheckBox(sectionKey)}>
                <Check />
                <styles.CheckText>완료!</styles.CheckText>
              </styles.CheckBox>
            ) : (
              <styles.UnCheckBox onClick={() => toggleCheckBox(sectionKey)}>
                <UnCheck />
                <styles.CheckText>완료 시 체크!</styles.CheckText>
              </styles.UnCheckBox>
            )}
          </styles.CheckBoxContainer>

          {moreModalOpen && activeSection === sectionKey && (
            <styles.Modal
              moreModalOpen={moreModalOpen}
              sidebarOpen={sidebarOpen}
            >
              <styles.EditBox
                sidebarOpen={sidebarOpen}
                onClick={toggleEditModal}
              >
                <styles.ModalButton>
                  <styles.ButtonText sidebarOpen={sidebarOpen}>
                    Edit
                  </styles.ButtonText>
                </styles.ModalButton>
              </styles.EditBox>
              <styles.DeleteBox
                sidebarOpen={sidebarOpen}
                onClick={() => toggleDeleteModal(sectionKey)}
              >
                <styles.ModalButton>
                  <styles.ButtonText sidebarOpen={sidebarOpen}>
                    Delete
                  </styles.ButtonText>
                </styles.ModalButton>
              </styles.DeleteBox>
            </styles.Modal>
          )}

          {editModal && activeSection === sectionKey && (
            <styles.ModalContainer>
              <styles.EditModal>
                <styles.EditTitleText>Title</styles.EditTitleText>
                <styles.EditTitleBox>
                  <styles.EditTitleInput
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                </styles.EditTitleBox>
                <styles.EditDescriptionText>
                  Description
                </styles.EditDescriptionText>
                <styles.EditDescriptionBox>
                  <styles.EditDescriptionInput
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </styles.EditDescriptionBox>
                <styles.ButtonBox>
                  <styles.CancelBox onClick={closeEditModal}>
                    <styles.CancelText>Cancel</styles.CancelText>
                  </styles.CancelBox>
                  <styles.EditDeleteButton onClick={handleEdit}>
                    <styles.Text>Edit</styles.Text>
                  </styles.EditDeleteButton>
                </styles.ButtonBox>
              </styles.EditModal>
            </styles.ModalContainer>
          )}

          {deleteModal && activeSection === sectionKey && (
            <styles.ModalContainer>
              <styles.DeleteModal>
                <styles.DeleteModalContent>
                  정말 삭제하시겠습니까?
                </styles.DeleteModalContent>
                <styles.ButtonBox>
                  <styles.CancelBox onClick={closeDeleteModal}>
                    <styles.CancelText>Cancel</styles.CancelText>
                  </styles.CancelBox>
                  <styles.EditDeleteButton onClick={handleDelete}>
                    <styles.Text>Delete</styles.Text>
                  </styles.EditDeleteButton>
                </styles.ButtonBox>
              </styles.DeleteModal>
            </styles.ModalContainer>
          )}
        </styles.TodoBox>
      );
    }
    return null;
  });
};

export default TodoBox;
