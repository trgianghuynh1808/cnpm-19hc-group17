import React from "react";
import Modal from "react-modal";

const defaultStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const ModalComponent = ({
  modalIsOpen,
  setIsOpen,
  doAfterOpenModal,
  styleModal,
  children
}) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={doAfterOpenModal}
        onRequestClose={closeModal}
        style={Object.assign({}, defaultStyle, styleModal)}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalComponent;
