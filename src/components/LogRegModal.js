import React, { useState } from "react";
import "./LogRegModal.css";

const LogRegModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="log-reg-container">
        {isOpen && (
          <>
            <div className="overlay"></div>
            <div className="log-modal">
              <header className="modal_header">
                {/* Tab links */}
                <div className="tab">
                  <button
                    className="tablinks"
                    onClick={(e) => openLogReg(e, "Log in")}
                  >
                    Log in
                  </button>
                  <button
                    className="tablinks"
                    onClick={(e) => openLogReg(e, "Register")}
                  >
                    Register
                  </button>
                </div>

                {/* Tab content */}
                <div id="Log in" className="tabcontent">
                  <h3>Log In</h3>
                </div>
                <div id="Register" className="tabcontent">
                  <h3>Register</h3>
                </div>
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
          LogIn/SignUp
        </button>
      </div>
    </>
  );
};

export default LogRegModal;
