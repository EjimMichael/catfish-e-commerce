import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <br />
      <br />
      <h1>Sign Up</h1>
      <hr />
      <form className="form-group" autoComplete="off" onSubmit={handleSignUp}>
        <label>Full Name</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setFullname(e.target.value)}
          value={fullName}
        />
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
