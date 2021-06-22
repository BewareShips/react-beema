import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
   padding: ${({ small }) => (small ? "5px 9px" : "7px 15px")};
   border-radius: 5px;
   background: ${theme.primary};
   color: #fff;
   font-weight: bold;
   font-size: ${({ small }) => (small ? "12px" : "16px")};
   outline: none;
   border: 2px solid transparent;
   transition: all 0.2s ease-in-out;
   cursor: pointer;

   &:hover {
      background: transparent;
      border: 2px solid ${theme.primary};
   }
`;

const Button = (props) => {
   return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

export default Button;
