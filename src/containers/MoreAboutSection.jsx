import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";

import AboutImgUrl from "../assets/illustrations//rocket_launch_.png";

const MoreAboutSection = () => {
   const MoreAboutContainer = styled(Element)`
      min-height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 1em;
   `;

   const AboutContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 1000px;
      @media screen and (max-width: 480px) {
         max-width: 100%;
         flex-direction: column-reverse;
      }
   `;

   const AboutText = styled.p`
      font-size: 21px;
      color: #2f2f2f;
      font-weight: normal;
      line-height: 1.4;
      @media screen and (max-width: 900px) {
         font-size: 19px;
      }
      @media screen and (max-width: 480px) {
         font-size: 17px;
      }
   `;

   const AboutImg = styled.img`
      width: 600px;
      height: 500px;
      margin-left: 2em;
      @media screen and (max-width: 1200px) {
         width: 470px;
         height: 390px;
         margin-left: 0;
      }
      @media screen and (max-width: 720px) {
         width: 370px;
         height: 290px;
         margin-left: 0;
      }
   `;

   return (
      <MoreAboutContainer>
         <SectionTitle>More About Beema </SectionTitle>
         <AboutContainer>
            <AboutText>
               Beema is about designing, building and deliverying best quality
               software for your company. We make sure that you get the best
               software inferstracture and set of applications to ensure the
               best experience of your clients. So wether you are handling
               thousands of payment transactions or you’re just starting out,
               you are in the right place.
            </AboutText>
            <AboutImg src={AboutImgUrl} />
         </AboutContainer>
      </MoreAboutContainer>
   );
};

export default MoreAboutSection;
