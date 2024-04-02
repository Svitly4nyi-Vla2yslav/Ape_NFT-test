import styled from '@emotion/styled';
// import { BurgerMenuProps } from '../BurgerMenu/BurgerMenu';

export const HeaderContainer = styled.div<{isopen: boolean}>`
transition-duration: 300ms;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
   padding: 9px;
   background-color: ${({ isopen }) => (isopen ? '#000000' : '#dc3b5a')}; 
    margin: 7px;
    border-radius: 12px;
    height: 542px;


`

export const Logo = styled.a`
width: 48px;
height: 32px;
`
export const LogoIcon = styled.img`

`;


