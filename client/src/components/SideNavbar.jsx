import React from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideNavbar = () => {
  return (
    <Sidebar>
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

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15rem 0rem;
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
