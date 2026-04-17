// Signup.jsx
import React from "react";
import "./signUp.css";
import { Link } from "react-router-dom";
const signUp = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <h1 className="title">
            Create your <br /> PopX account
          </h1>

          {[
            "Full Name",
            "Phone number",
            "Email address",
            "Password",
            "Company name",
          ].map((label) => (
            <div className="input-group" key={label}>
              <label className="floating-label">
                {label}
                <span className="req">*</span>
              </label>
              <input type="text" defaultValue="Marry Doe" />
            </div>
          ))}

          <div className="radio-section">
            <p>
              Are you an Agency?<span className="req">*</span>
            </p>
            <div className="radio-group">
              <label>
                <input type="radio" name="agency" defaultChecked />{" "}
                <span>Yes</span>
              </label>
              <label>
                <input type="radio" name="agency" /> <span>No</span>
              </label>
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to="/profile" className="btn-create">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default signUp;