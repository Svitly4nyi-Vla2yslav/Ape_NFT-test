import styled from "styled-components";
import CrossIcon from "../../assets/image/cross.svg"
import { keyframes } from 'styled-components';



export const AboutContainer = styled.div`
max-width: 100%;
max-height: 100%;
margin: 60px auto 1px auto;

@media screen and (min-width: 768px){
// display: flex;
// flex-direction: row;
// flex-wrap: nowrap;
// justify-content: center;
margin: 80px 88px 0 88px;
max-width: 768px;


position: relative;
display: grid;
column-gap: 10px;
grid-template-columns: 269px 313px;
align-items: start;
}
`;

export const AboutTitle = styled.h2`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 40px;

height: 200px;
line-height: 100%;
margin-left: auto;
margin-right: auto;
width: 216px;

line-height: 1;
text-transform: uppercase;
color: #fff;
margin-bottom: 16px;

@media screen and (min-width: 768px){
  font-size: 60px;
  margin-bottom: 68px;
  margin-left: 0px;
  margin-right: 0px;
  line-height: 100%;
  width: 269px;
  height: 300px;
}
  
}
`;

export const TextContainer = styled.div`
margin: 60px auto 1px auto;
@media screen and (min-width: 768px){
display:  flex;
  
}

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

@media screen and (min-width: 768px){
  padding-top: 0px;
  padding-bottom: 24px;
}

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
margin-left: auto;
margin-right: auto;
width: 216px;

@media screen and (min-width: 768px){
  width: 275px;
  text-align: right;
  margin-bottom: 88%;
}
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

margin-left: auto;
margin-right: auto;
width: 216px;

@media screen and (min-width: 768px){
// position: absolute;
// left: 0px ;
// bottom: 0px ;
margin-right: 10%;
margin-bottom: 36px;
}
`;

export const ImageCard = styled.img`
width: 216px;
margin-left: auto;
margin-right: auto;
margin-top: 40px;

@media screen and (min-width: 768px){
height: 422px;
width: 313px;
// margin-left: 100%;
position: absolute;
bottom: 0px;
right: 0px;
  
}

`;

export const BanerWraper = styled.div`
display: flex;
width: 100%;
margin-left: auto;
margin-right: auto;
padding: 6px 0px 8px;
background: #dc3b5a;
overflow: hidden;


`;

export const MarqueeContainer = styled.ul`
display: flex;
 animation: move 20s linear infinite; 
`;

export const MarqueeText = styled.p`
font-family: 'Right Grotesk';
padding: 6px 0px 8px 0px;
  white-space: nowrap;
  margin: 0;
  font-weight: 900;
font-size: 36px;
line-height: 36px; 
line-height: 1;
text-transform: uppercase;
color: #fff;
`;
export const MarqueeTextItem = styled.li`
position: relative;
padding-right: 84px;



&::after {
  content: '';
  display: inline-block;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 8px;
  right: 24px;
  background-image: url(${CrossIcon});

  @media screen and (min-width: 1280px) {
    top: 19px;
    right: 36px;
  }
}

@media screen and (min-width: 1280px) {
  padding-right: 108px;
}
`;
