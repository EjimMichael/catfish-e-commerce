import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <br />
      <br />
      <h1>Login</h1>
      <hr />
      <form className="form-group" autoComplete="off" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br></br>
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
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
