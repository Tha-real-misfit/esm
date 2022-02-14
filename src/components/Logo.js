import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/ashv2.png';

const LogoStyles = styled.div`
  max-width: 100px;
  .main__logo {
    width: 60%;
    height: 100%;
    object-fit: contain;
  }
`;

export default function Logo({ ...rest }) {
  return (
    <LogoStyles {...rest}>
      <img src={logo} alt="esm" className="main__logo" />
    </LogoStyles>
  );
}
