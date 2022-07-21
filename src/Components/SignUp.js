import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='container'>
      <br />
      <br />
      <h1>Sign Up</h1>
      <hr />
      <form className="form-group" autoComplete="off">
        <label>Full Name</label>
        <input type="text" className="form-control" required />
        <label>Email</label>
        <input type="email" className="form-control" required />
        <br></br>
        <label>Password</label>
        <input type="password" className="form-control" required />
        <br></br>
        <div className="btn-box">
          <span>
            Already have an account Login
            <Link to="login" className="link">
              {" "}
              Here
            </Link>
          </span>
          <button type="submit" className="btn btn-success btn-md">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;