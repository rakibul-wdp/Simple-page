import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(firstName, lastName, email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>First Name:</label>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <label>Last Name:</label>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <div>
        <button disabled={isLoading}>Sign up</button>
        <Login>
          Already have an account?
          <Link
            style={{
              color: "blue",
              textDecoration: "none",
              marginLeft: "0.2rem",
            }}
            to="/login"
          >
            Login
          </Link>
        </Login>
      </div>

      {error && <div className="error">{error}</div>}
    </form>
  );
}

const Login = styled.span`
  font-size: 13px;
  margin-left: 1rem;
`;

export default Signup;
