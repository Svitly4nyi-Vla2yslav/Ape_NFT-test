import styled from "styled-components";

import { keyframes } from 'styled-components';

export const marqueeAnimation = keyframes`
  from {
    transform: translateX(1%);
  }
  to {
    transform: translateX(-900%);
  }
`;

export const AboutContainer = styled.div`
width: 216px;
margin: 60px auto 1px auto;
`;

export const AboutTitle = styled.h2`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 40px;

// line-height: 40px; 
line-height: 1;
text-transform: uppercase;
color: #fff;
padding-bottom: 16px;
`;

export const SpanTitle = styled.span`
color: #dc3b5a;
`;

export const SpanClose = styled.span`
display: flex;
flex-direction: column;
    align-items: center;
    padding-top: 36px;
    padding-bottom: 16px;

`;

export const TextMessinaBig = styled.p`
font-family: 'Messina Sans Mono';
font-weight: 400;
font-size: 16px;

// line-height: 19px; 
line-height: 1.1875;
text-transform: uppercase;
text-align: right;
color: #fff;
`;

export const TextMessinaLitle = styled.p`
font-family: 'Messina Sans Mono';
font-weight: 400;
font-size: 12px;

// line-height: 14px; 
line-height: 1.16667;
text-transform: uppercase;
text-align: center;
color: #fff;
`;

export const ImageCard = styled.img`

padding-top: 40px;

`;



export const MarqueeContainer = styled.div`
  overflow: hidden;
  height: 52px;
  background: #dc3b5a;
  width: 100%;
`;

export const MarqueeText = styled.div`
font-family: 'Right Grotesk';
padding: 6px 0px 8px 0px;
  white-space: nowrap;
 animation: ${marqueeAnimation} 120s linear infinite; 
  margin: 0;
  font-weight: 900;
font-size: 36px;

// line-height: 36px; 
line-height: 1;
text-transform: uppercase;
color: #fff;
`;