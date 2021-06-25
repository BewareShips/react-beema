import React from "react";
import styled from "styled-components";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import { useMediaQuery } from "react-responsive";
import { Element } from "react-scroll";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";
import { Marginer } from "../components/marginer";
import CardReview from "../components/CardReview/CardReview";

import "pure-react-carousel/dist/react-carousel.es.css";
import { ourReviews } from "../assets/data/data";

const ReviewsContainer = styled(Element)`
   max-height: 800px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const StyledDotGroup = styled(DotGroup)`
   margin: auto;
   display: flex;
   justify-content: center;
   button {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #c7bdbd;
      border: none;
      outline: none;
      margin-top: 5em; 
      &:not(:last-of-type) {
         margin-right: 3px;
      }
   }
   .carousel__dot--selected {
      background-color: #6b6565;
   }
`;

const StyledCarouselProvier = styled(CarouselProvider)`
   width: 50%;
   @media screen and (max-width: 1200px) {
      width: 100%;
   }
`;

const StyledSlide = styled(Slide)`
   .carousel__inner-slide {
      display: flex;
      justify-content: center;
   }
`;

const ReviewsSection = () => {
     const isTablet = useMediaQuery({ query: "(max-width: 1200px)" });
   return (
      <ReviewsContainer>
         <SectionTitle>What others are saying about us</SectionTitle>
         <Marginer direction="vertical" margin="3em" />
         <StyledCarouselProvier
            naturalSlideWidth={200}
            naturalSlideHeight={isTablet ? 280 : 205}
            totalSlides={4}
            visibleSlides={isTablet ? 1 : 2}
            isIntrinsicHeight
         >
            <Slider>
               {ourReviews.map(({ text, userName, userImgUrl }, i) => (
                  <StyledSlide index={i} key={userName}>
                     <CardReview
                        reviewText={text}
                        username={userName}
                        userImgUrl={userImgUrl}
                     />
                  </StyledSlide>
               ))}
            </Slider>
            <StyledDotGroup />
         </StyledCarouselProvier>
      </ReviewsContainer>
   );
};

export default ReviewsSection;
