import React from "react";
import styled from "styled-components";
<<<<<<< HEAD:src/containers/homepage/index.jsx
import { Marginer } from "../../components/marginer";
import ReviewSection from "../ReviewSection";
import ServicesSection from "../ServicesSection";
import TopSection from "../TopSection";
=======
import Footer from "./Footer";
import { Marginer } from "../components/marginer";
import MoreAboutSection from "./MoreAboutSection";
import ReviewsSection from "./ReviewsSection";
import ServicesSection from "./ServicesSection";
import TopSection from "./TopSection";
>>>>>>> d7d3f4e (last layout changing):src/containers/index.jsx

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
<<<<<<< HEAD:src/containers/homepage/index.jsx
         <ReviewSection/>
=======
         <ReviewsSection/>
         <MoreAboutSection/>
         <Marginer direction="vertical" margin="8em" />
         <Footer/>
>>>>>>> d7d3f4e (last layout changing):src/containers/index.jsx
      </PageContainer>
   );
};

export default HomePage;
