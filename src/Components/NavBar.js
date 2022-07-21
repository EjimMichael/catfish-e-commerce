import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div>
        <Link className="navlink" to="signup">
          SIGN UP
        </Link>
      </div>
      <div>
        <Link className="navlink" to="login">
          LOGIN
        </Link>
      </div>
    </div>
  );
}

export default Navbar