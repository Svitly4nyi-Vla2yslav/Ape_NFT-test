import styled from "styled-components";

export const ContainerColection = styled.div`
:where(.css-dev-only-do-not-override-1kuana8).ant-collapse>.ant-collapse-item {
    border: none !important;
    // width: 100%;
   width: 65%;

margin: 0px 72px;
transition-duration: 300ms;
}
:where(.css-dev-only-do-not-override-1kuana8).ant-collapse-borderless >.ant-collapse-item:last-child, :where(.css-dev-only-do-not-override-1kuana8).ant-collapse-borderless >.ant-collapse-item:last-child .ant-collapse-header {
    border-radius: 12px;
}


 .ant-collapse-item-active{
    border-radius: 12px;
    background: #1e1e1e;
    padding: 8px 8px;
 }

 .a-DMjG :where(.css-dev-only-do-not-override-1kuana8).ant-collapse>.ant-collapse-item {
   
    border-radius: 12px;
}
&:active{
    border-radius: 12px;
    background: #1e1e1e;
    
    
}

`;

export const TitleList = styled.ul`
width: 100%;
display: flex;


`;

export const Title = styled.h2`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 44px;
line-height: 0.90909;
text-transform: uppercase;
color: #fff;
text-align: center;
padding-top: 60px;
padding-bottom: 24px;
`;

export const TitleItem = styled.li`
font-family: 'Right Grotesk';
font-weight: 900;
font-size: 20px; 
line-height: 1;
text-transform: uppercase;
color: #fff;
// text-align: ;
width: 160px;

&:hover,
&:active{
    color: #dc3b5a;
    background: #1e1e1e;
    border-radius: 12px;
}
`;



export const ItemText = styled.p`
font-family: 'Messina Sans Mono';
font-weight: 400;
font-size: 12px;
line-height: 1.16667;
text-transform: uppercase;
color: #fff;
background: #1e1e1e;
width: 216px;
padding: 8px;
padding-top: 10px
border-radius: 12px;
`;

export const NumberTitle = styled.span`
font-family: "Biro Script Plus";
font-weight: 400;
font-size: 12px; 
line-height: 1.66667;
color: #dc3b5a;
padding: 8px 8px 8px 0;

&:target,
&:active{
    color: #fff;
    // background: #1e1e1e;

}
`



export const NumberTitleText = styled.span`

`;
