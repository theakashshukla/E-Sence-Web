import React, { useState } from "react";
import { getAuth } from "firebase/auth";

const ForgotPasswordModal = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const auth = getAuth();
  
  const handleCloseModal = () => {
    setEmail("");
    setMessage("");
    setShowModal(false);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setMessage("Password reset email sent. Please check your inbox.");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <div
      className="modal"
      style={{ display: showModal ? "block" : "none" }}
      onClick={handleCloseModal}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>
        <h3>Forgot Password</h3>
        <form onSubmit={handleResetPassword}>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Reset Password</button>
          <p className="message">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
