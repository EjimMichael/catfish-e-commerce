import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container">
      <br />
      <br />
      <h1>Login</h1>
      <hr />
      <form className="form-group" autoComplete="off">
        <label>Email</label>
        <input type="email" className="form-control" required />
        <br></br>
        <label>Password</label>
        <input type="password" className="form-control" required />
        <br></br>
        <div className="btn-box">
          <span>
            Don't have an account SignUp
            <Link to="signup" className="link">
              {" "}
              Here
            </Link>
          </span>
          <button type="submit" className="btn btn-success btn-md">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;