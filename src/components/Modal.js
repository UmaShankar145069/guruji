import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <header className="modal_header">
              <h2>Modal Title</h2>
              <button onClick={closeModal} className="close-button">
                &times;
              </button>
            </header>
            <main className="modal_main">
              <p>Some content here!</p>
            </main>
          </div>
        </>
      )}
      <button className="button" onClick={openModal}>
        Make Reviews
      </button>
    </div>
  );
};

export default Modal;
