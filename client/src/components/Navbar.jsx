import React from "react";
// import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import Search from "./Search";

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <NavWrapper>
      {/* <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Food Recipe</Logo>
      </Nav> */}
      <Search />
      <div>
        {user && (
          <>
            <User>{user.firstName + " " + user.lastName}</User>
            <Button onClick={handleClick}>Log Out</Button>
          </>
        )}
        {!user && (
          <>
            <Login to="/login">Login</Login>
          </>
        )}
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const User = styled.span`
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: rgb(56, 56, 56);
`;

const Button = styled.button`
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #f27121, #e94057);
    transition: 0.3s;
  }
`;

const Login = styled(Link)`
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #f27121, #e94057);
    transition: 0.3s;
  }
`;

export default Navbar;
