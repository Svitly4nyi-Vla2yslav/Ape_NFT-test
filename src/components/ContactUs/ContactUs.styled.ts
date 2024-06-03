import styled from "styled-components";

export const ContactContainer = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    width: 216px;
    margin : 0 auto;
@media screen and (min-width: 768px){
    width: 397px;
    margin: 0 185px;
}
`;

export const TitleContact = styled.h3`
font-family: "Right Grotesk";
font-weight: 900;
font-size: 44px;
line-height: 0.90909;
text-transform: uppercase;
color: #fff;
text-align: center;
@media screen and (min-width: 768px){
    font-size: 80px;
    line-height: 100%;
    
}

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
@media screen and (min-width: 768px){

}
`;


export const IconX = styled.img`
width: 36px;
height: 36px;
margin-top: 24px;
`;


export const ContainerForm = styled.form`
margin: 16px 72px;
// width: 100%;
@media screen and (min-width: 768px){
    max-width: 100%;
}

`;

export const InputDiscord = styled.input`
border: 1px solid #1e1e1e;
border-radius: 0 8px 8px 0;
padding: 22px 24px;
background: #000000;
width: 168px;
color:  #fff;
@media screen and (min-width: 768px){
width: 200px;
}
`;

export const InputFox = styled.input`
border: 1px solid #1e1e1e;
border-radius: 0 8px 8px 0;
padding: 22px 24px;
background: #000000;
width: 168px;
color:  #fff;
@media screen and (min-width: 768px){
    width: 200px;
}
`;

export const IconInput = styled.svg`
@media screen and (min-width: 768px){

}
`;

export const ButtonSubmit = styled.button`
border: none;
border-radius: 8px;
width: 216px;
height: 48px;
backdrop-filter: blur(12px);
background: #dc3b5a;
@media screen and (min-width: 768px){
    width: 248px;
    
}
`;

export const ButtonTextContact = styled.p`
font-family: "Right Grotesk";
font-weight: 900;
font-size: 16px;
line-height: 1.1875;
color: #fff;
@media screen and (min-width: 768px){

}
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
@media screen and (min-width: 768px){

}

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
@media screen and (min-width: 768px){

}
`;

export const ContainerIcon = styled.div`
height: 48px;
display: flex;
margin-bottom: 16px;
width: auto;
@media screen and (min-width: 768px){

}
`;
