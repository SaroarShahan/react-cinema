import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../logo.svg";

class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <HeaderLogoWrap>
          <HeaderLogoImg src={logo} alt="logo" />
          <HeaderLogo href="/" target="_blank" rel="noopener noreferrer">
            ReactCinema
          </HeaderLogo>
        </HeaderLogoWrap>
      </HeaderWrap>
    );
  }
}

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: calc(1rem + 2vmin);
  padding: 1.5rem 0;
  margin: auto;
  max-width: 120rem;

  @media (max-width: 40rem) {
    max-width: 30rem;
  }
`;

const HeaderLogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.a`
  color: #61dafb;
  font-family: "Felipa", cursive;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const HeaderLogoImg = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 10vmin;
`;
