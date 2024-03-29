import styled from '@emotion/styled';
import { BurgerMenuProps } from './BurgerMenu';

export const ContainerMenu = styled.ul<BurgerMenuProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;
  flex-direction: column;
`;

export const ContainerNetworks = styled.div`
display: flex;
flex-direction: column;
align-content: flex-end;
    flex-wrap: wrap;
`;

export const MenuItem = styled.li`
padding: 10px 0;
`;

export const BurgerMenuButton = styled.button`
font-size: 12px;
width: 48px;
height: 48px;
cursor: pointer;
border-radius: 12px;
background: #DC3B5A;
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