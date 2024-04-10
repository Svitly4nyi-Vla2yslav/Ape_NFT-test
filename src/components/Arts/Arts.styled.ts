import styled from "styled-components";
import { Title } from '../FAQ/FAQ.styled';

export const ArtsContainer = styled.div`
:where(.css-dev-only-do-not-override-1kuana8).ant-btn-default {
    background: none;
    border-color: transparent;
    color: #ffffff;
    padding: 24px;
}

:where(.css-dev-only-do-not-override-1kuana8).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    border-color: transparent;
    background: transparent;
    color: #dc3b5a;
}
margin-bottom: 60px;
`;

export const TitleText = styled.h3`
font-family: "Right Grotesk";
font-weight: 900;
font-size: 44px; 
line-height: 0.90909;
text-transform: uppercase;
color: #fff;
text-align: center;
padding-bottom: 24px;
`;

export const ButtonText = styled.p`
font-family: "Biro Script Plus";
font-weight: 400;
font-size: 24px;
line-height: 1.25;
color: #fff;

&:active,
&:focus,
&:hover{
    color: #dc3b5a
}
`;



export const ImageItem = styled.div`

`;

export const ImageCard = styled.img`
border-radius: 12px;
width: 216px;
height: 256px;
`;

export const ButtonContainer = styled.div`
display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;

`;
