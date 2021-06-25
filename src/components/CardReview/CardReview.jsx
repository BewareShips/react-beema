import React from "react";
import styled from "styled-components";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marginer } from "../marginer";

const CardContainer = styled.div`
   width: 350px;
   height: 450px;
   background: #fff;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
   border-radius: 3px;
   margin: 5px 1em;
   position: relative;
   padding: 5px 1em;
`;

const QuoteIcon = styled.div`
   position: absolute;
   top: 13px;
   left: 17px;
   color: #d1d1d1;
   font-size: 37px;
`;

const RewCardContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 60%;
`;

const ReviewText = styled.p`
   font-size: 17px;
   color: #585858;
   font-weight: normal;
   display: flex;
   align-items: stretch;
`;

const Line = styled.span`
   width: 100%;
   border: 1px solid #cdcdcd;
   margin-bottom: 1em;
   display: flex;
`;

const UserDetails = styled.div`
   display: flex;
   align-items: center;
   
`;

const UserImg = styled.img`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   object-fit: cover;
   margin-right: 10px;
`;

const UserName = styled.span`
   font-size: 17px;
   color: #1b1717;
   font-weight:600;
`;

const CardReview = (props) => {
   const { reviewText, username, userImgUrl } = props;
   return (
      <CardContainer>
         <QuoteIcon>
            <FontAwesomeIcon icon={faQuoteLeft} />
         </QuoteIcon>
         <Marginer direction="vertical" margin="6em" />
         <RewCardContainer>
            <ReviewText>{reviewText}</ReviewText>
            <Line />
         </RewCardContainer>
         <UserDetails>
            <UserImg src={userImgUrl} />
            <UserName>{username}</UserName>
         </UserDetails>
      </CardContainer>
   );
};

export default CardReview;
