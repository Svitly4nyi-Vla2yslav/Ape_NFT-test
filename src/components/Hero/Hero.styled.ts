import styled from "styled-components";
import { BurgerMenuProps } from "../BurgerMenu/BurgerMenu";

export const HeroContainer = styled.div<{isopen: boolean}>`
display: ${({ isopen }) => (isopen ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    margin-top: 36px;
    margin-right: 8px
`;

export const TextBuroScript = styled.p`
font-family: 'Biro Script Plus';
font-weight: 400;
font-size: 16px;
line-height: 1.6875;
color: #1e1e1e;
`;

export const TextGroteskTitle = styled.h1`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 44px;

// line-height: 44px; 
line-height: 1;
letter-spacing: 0.01em;
color: #1e1e1e;
`;

export const TextGrotesk = styled.p`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 16px;
line-height: 1.1875;
color: #fff;
`;

export const HeroImage = styled.img`
width: 216px;
height: 284px;

`;

export const ButtonMeetApes = styled.button`
border-radius: 8px;
padding: 10px 70px 12px 70px;
width: 216px;
height: 41px;
backdrop-filter: blur(12px);
background: rgba(30, 30, 30, 0.2);
border: none;
`;

export const TextMessina = styled.p`
font-family: 'Messina Sans Mono';
font-weight: 400;
font-size: 12px;
width: 216px;

// line-height: 14px; 
line-height: 1.16667;
text-transform: uppercase;
text-align: center;
color: #1e1e1e;
`;
