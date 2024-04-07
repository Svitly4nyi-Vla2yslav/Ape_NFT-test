import styled from "styled-components";


export const MindContainer = styled.div`
`

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
    align-items: center;
    flex-direction: column;
}
`;

export const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  margin: 24px -187% 24px 10%;
//   margin-left: 19%;

`;

export const SlideCard = styled.div`
  flex: 0 0 100%; 
  max-width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  
`;

export const SliderButton = styled.button`
//   position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 1;

//   &:active,
  &:focus,
  &:hover{
      color: #dc3b5a;
  }

`;

export const PrevButton = styled(SliderButton)`
  left: 10px;
  font-family: "Biro Script Plus";
font-weight: 400;
font-size: 24px;
line-height: 1;
color: #fff;
`;

export const NextButton = styled(SliderButton)`
  right: 10px;
  font-family: "Biro Script Plus";
font-weight: 400;
font-size: 24px;
line-height: 1;
color: #fff;


`;

export const CardItem = styled.div`
border-radius: 12px;
padding: 24px 12px;
width: 216px;
height: 242px;
background: #1e1e1e;
display: flex;
flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: stretch;
` 

export const ButtonContainer = styled.div`
display: flex;
gap: 48px;
`;

export const TextMessinaMap = styled.p`
font-family: 'Messina Sans Mono';
font-weight: 400;
font-size: 12px;
line-height: 1.16667;
text-transform: uppercase;
color: #fff;
`;

export const TitleMap = styled.h3`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 32px;
line-height: 1;
text-transform: uppercase;
color: #fff;
padding-top: 78px;
`;

export const IconArrow = styled.img`
height: 24px;
width: 24px;
`;