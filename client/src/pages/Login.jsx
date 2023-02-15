import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

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
        <button disabled={isLoading}>Log in</button>
        <Signup>
          Don't have an account?
          <Link
            style={{
              color: "blue",
              textDecoration: "none",
              marginLeft: "0.2rem",
            }}
            to="/signup"
          >
            Signup
          </Link>
        </Signup>
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

const Signup = styled.span`
  font-size: 13px;
  margin-left: 1rem;
`;

export default Login;
