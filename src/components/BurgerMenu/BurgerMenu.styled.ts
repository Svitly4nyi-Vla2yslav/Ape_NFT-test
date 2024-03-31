import styled from '@emotion/styled';

export const ContainerMenu = styled.ul< {isOpen: boolean} >`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: absolute;
  top: 35%;
  left: 0;
  // background-color: #f9f9f9;
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;
  text-color: white;
  flex-direction: column;
  align-items: center;
`;

export const ButtonMenu = styled.button`
    background-color: transparent;
    display: flex;
    width: 125px;
    flex-direction: column;
    align-items: center;
    border: none;

`;

export const TextButton = styled.p`
// color: white;
`

export const ContainerNetworks = styled.div`
display: flex;
flex-direction: column;
align-content: flex-end;
 flex-wrap: wrap;
`;

export const MenuItem = styled.li`
color: white;
padding: 10px 0;
background-color: transparent;
`;

export const BurgerMenuButton = styled.button`
font-size: 11px;
width: 48px;
height: 48px;
cursor: pointer;
border-radius: 12px;
border: none;
border-radius: 8px;
padding: 1px;
backdrop-filter: blur(12px);
background: rgba(30, 30, 30, 0.3);
`;

export const Link = styled.a`
width: 48px;
height: 48px;
color: red;
text-decoration: none;
color: #333;
 
`;

export const Wrapper = styled.div`

display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content: flex-end;

`;