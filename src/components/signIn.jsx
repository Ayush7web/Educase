import React from 'react'
import { Link } from 'react-router-dom'
import './signIn.css'

const signIn = () => {
  return (
    <div>
      <div className="container1">
        <div className="card1">
          <div className="content">
            <h1 className="title">
              Signin to your <br /> PopX account
            </h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>

            <div className="input-group">
              <label className="floating-label">Email Address</label>
              <input type="email" placeholder="Enter email address" />
            </div>

            <div className="input-group">
              <label className="floating-label">Password</label>
              <input type="password" placeholder="Enter password" />
            </div>

            <Link to="/signUp" className='lg-btn' >Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signIn