import styled from "styled-components";

export const ContactContainer = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    width: 216px;
    margin : 0 auto;
`;

export const TitleContact = styled.h3`
font-family: "Right Grotesk";
font-weight: 900;
font-size: 44px;
line-height: 0.90909;
text-transform: uppercase;
color: #fff;
text-align: center;
`;

export const ContactText = styled.p`
font-family:"Messina Sans Mono";
font-weight: 400;
font-size: 16px;

// line-height: 19px; 
line-height: 1.1875;
text-transform: uppercase;
text-align: center;
color: #fff;
margin: 16px 0;
`;


export const IconX = styled.img`
width: 36px;
height: 36px;
margin-top: 24px;
`;


export const ContainerForm = styled.form`
margin: 16px 72px;
// width: 100%;

`;

export const InputDiscord = styled.input`
border: 1px solid #1e1e1e;
border-radius: 0 8px 8px 0;
padding: 22px 24px;
background: #000000;
width: 168px;
color:  #fff;
`;

export const InputFox = styled.input`
border: 1px solid #1e1e1e;
border-radius: 0 8px 8px 0;
padding: 22px 24px;
background: #000000;
width: 168px;
color:  #fff;
`;

export const IconInput = styled.svg`

`;

export const ButtonSubmit = styled.button`
border-radius: 8px;
width: 216px;
height: 48px;
backdrop-filter: blur(12px);
background: #dc3b5a;
`;

export const ButtonTextContact = styled.p`
font-family: "Right Grotesk";
font-weight: 900;
font-size: 16px;
line-height: 1.1875;
color: #fff;
`;

export const DiscordIcon = styled.img`
backdrop-filter: blur(12px);
background: #1e1e1e;
border: 1px solid #1e1e1e;
border-radius: 8px 0 0 8px;
background: #1E1E1E;
width: 48px;
height: 48px;
padding: 10px;


`;

export const FoxIcon = styled.img`
backdrop-filter: blur(12px);
background: #1e1e1e;
border: 1px solid #1e1e1e;
border-radius: 8px 0 0 8px;
background: #1E1E1E;
width: 48px;
height: 48px;
padding: 10px;
`;

export const ContainerIcon = styled.div`
height: 48px;
display: flex;
margin-bottom: 16px;
width: auto;
`;
