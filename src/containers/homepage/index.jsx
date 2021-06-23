import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import ReviewSection from "../ReviewSection";
import ServicesSection from "../ServicesSection";
import TopSection from "../TopSection";

const PageContainer = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
`;

const HomePage = () => {
   return (
      <PageContainer>
         <TopSection />
         <ServicesSection />
         <Marginer direction="vertical" margin="2em" />
         <ReviewSection/>
      </PageContainer>
   );
};

export default HomePage;
