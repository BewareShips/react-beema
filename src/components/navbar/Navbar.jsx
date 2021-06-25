import React from "react";
import styled from "styled-components";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import {Marginer} from '../marginer/index'

const NavbarContainer = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   text-align: center;
`;

const BrandContainer = styled.div`
   padding: 0 1em;
`;

const AcsessContainer = styled.div`
   padding: 0 1em;
   display: flex;
   flex-direction: row;
`;

const LoginButton = styled(Button)`
   background: transparent;
   border: none;

   &:hover {
      background: transparent;
      border: none;
      color: rgb(199,199,199)
   }
`;

const Navbar = () => {
   return (
      <NavbarContainer>
         <BrandContainer>
            <Logo inline />
         </BrandContainer>
         <AcsessContainer>
            <Button small>Get started</Button>
            <Marginer direction="horizontal" margin="8px"/>
            <LoginButton small>Login</LoginButton>
         </AcsessContainer>
      </NavbarContainer>
   );
};

export default Navbar;
