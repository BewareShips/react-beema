import React from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Marginer } from "../marginer";

const CardContainer = styled.div`
   width: 350px;
   height: 550px;
   background: #fff;
   box-shadow: 0px 0px 7px rgba(10, 10, 10, 0.2);
   border-radius: 3px;
   position: relative;
   margin: 5px;
   padding: 10px 1.2em;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 13px;
  left: 17px;
  color: #d1d1d1;
  font-size: 37px;
`;

const ReviewText = styled.p`
  font-size: 17px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;


const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-size: 15px;
  color: #000;
`;

const ReviewCard = (props) => {
  const { reviewText, username, userImgUrl } = props;
   return <CardContainer><QuoteIcon>
   <FontAwesomeIcon icon={faQuoteLeft} />
 </QuoteIcon>
 <Marginer direction="vertical" margin="6em" />
 <ReviewText>{reviewText}</ReviewText>
 <Marginer direction="vertical" margin="7em" />
 <Line />
 <UserDetails>
   <UserImg src={userImgUrl} />
   <Username>{username}</Username>
 </UserDetails></CardContainer>;
};

export default ReviewCard;
