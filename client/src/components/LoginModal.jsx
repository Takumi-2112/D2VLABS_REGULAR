import "../styles/LoginModal.css";

function LoginModal({ loginModalOpen, setLoginModalOpen, handleModalClose }) {
  return (
    <div className="modal">
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-close-container">
            <p className="invisible">X</p>
            <h2 className="modal-title">Login</h2>
            <i
              className="fa-solid fa-xmark close-modal"
              onClick={handleModalClose}
            ></i>
          </div>
          <form>
            <div className="modal-inputs">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className="form-submit-button">Submit</button>
            </div>
            <div className="modal-links">
              <p className="forgot-password">Forgot Password?</p>
              <p className="sign-up-link">
                Don't have an account? <span>Sign Up</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
