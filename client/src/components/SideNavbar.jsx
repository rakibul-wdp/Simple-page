import React from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiKnifeFork, GiNoodles } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const SideNavbar = () => {
  return (
    <Sidebar>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Food Recipe</Logo>
      </Nav>
      <List>
        <SLink to={"/cuisine/Italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </SLink>
        <hr />
        <SLink to={"/cuisine/American"}>
          <FaHamburger />
          <h4>American</h4>
        </SLink>
        <hr />
        <SLink to={"/cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </SLink>
        <hr />
        <SLink to={"/cuisine/Japanese"}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </SLink>
      </List>
    </Sidebar>
  );
};

const Sidebar = styled.div`
  background: #ffffff;
  height: 100vh;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 2rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  margin: 0.2rem 0;
  background: linear-gradient(35deg, #494949, #313131);
  height: 5rem;
  cursor: pointer;

  h4 {
    color: white;
    font-size: 1.2rem;
  }
  svg {
    color: white;
    font-size: 2rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default SideNavbar;
