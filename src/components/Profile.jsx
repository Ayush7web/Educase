// Profile.jsx
import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="header">Account Settings</div>
        <div className="profile-content">
          <div className="profile-info">
            <div className="avatar-wrapper">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Marry Doe"
                className="avatar"
              />
              <div className="camera-icon">📷</div>
            </div>
            <div className="user-details">
              <h3>Marry Doe</h3>
              <p>Marry@Gmail.Com</p>
            </div>
          </div>
          <p className="bio">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Profile;