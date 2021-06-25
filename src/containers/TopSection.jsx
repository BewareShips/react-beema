import React from "react";
import styled from "styled-components";
import BackgroundImg from "../assets/pictures/company_team.jpg";
import Logo from "../components/logo/Logo";
import { Marginer } from "../components/marginer";
import Button from "../components/button/Button.jsx";
import DownArrow from "../components/downArrow/DownArrow";
import Navbar from "../components/navbar/Navbar";
import { Element, scroller } from "react-scroll";

const TopContainer = styled.div`
   width: 100%;
   height: 100vh;
   padding: 0;
   background: url(${BackgroundImg});
   position: relative;
`;

const BackgroundFilter = styled.div`
   width: 100%;
   height: 100%;
   background: rgba(55, 55, 55, 0.88);
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const MotivationalText = styled.h1`
   margin: 0;
   font-size: 34px;
   font-weight: 600;
   line-height: 1.4;
   color: #fff;
   text-align: center;
   @media screen and (max-width: 480px){
     font-size: 23px;
   }
`;

const DownArrowContainer = styled.div`
   position: absolute;
   bottom: 25px;
   left: 50%;
   transform: translateX(-50%);
`;

const TopSection = () => {
   const scrollToNextSection = () => {
      scroller.scrollTo("services", { smooth: true, duration: 1500 });
   };
   return (
      <Element name="topSection">
         <TopContainer>
            <BackgroundFilter>
               <Navbar />
               <Marginer direction="vertical" margin="8em" />
               <Logo />
               <Marginer direction="vertical" margin="4em" />
               <MotivationalText>Software Development</MotivationalText>
               <MotivationalText>From the best in industry</MotivationalText>
               <Marginer direction="vertical" margin="2em" />
               <Button>Start your project</Button>
               <DownArrowContainer onClick={scrollToNextSection}>
                  <DownArrow />
               </DownArrowContainer>
            </BackgroundFilter>
         </TopContainer>
      </Element>
   );
};

export default TopSection;
