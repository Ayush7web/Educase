// import React from 'react';
import {Link} from 'react-router-dom';
import './screen.css';

const Screen = () => {
  return (
    <div className="container">
      <div className="card">
        {/* Top Spacer for the white area */}
        <div className="spacer"></div>

        {/* Content Area */}
        <div className="content">
          <h1 className="title">Welcome to PopX</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>

          <div className="button-group">
            <Link to="/signIn" className="btn-primary">
              Create Account
            </Link>
            <Link className="btn-secondary">Already Registered? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;