import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../components/marginer";
import OurService from "../components/ourService/OurService";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";

import {description} from '../assets/data/data.js'



const ServicesContainer = styled(Element)`
   width: 100%;
   min-height: 1100px;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 1rem 0;
`;

const ServicesSection = () => {
   return (
      <ServicesContainer name="services">
         <SectionTitle>Best Quality Software</SectionTitle>
         <Marginer direction="vertical" margin="3em" />
         {description.map(({ title, description, imgUrl, isReversed, id }) => (
            <OurService
               title={title}
               description={description}
               imgUrl={imgUrl}
               isReversed={isReversed}
               key={id}
            />
         ))}
      </ServicesContainer>
   );
};

export default ServicesSection;
