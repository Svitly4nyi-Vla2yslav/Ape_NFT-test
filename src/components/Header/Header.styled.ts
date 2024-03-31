import styled from '@emotion/styled';
import { BurgerMenuProps } from '../BurgerMenu/BurgerMenu';

const HeaderContainer = styled.div<BurgerMenuProps>`
transition-duration: 300ms;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
   padding: 10px;
   background-color: ${({ isOpen }) => (isOpen ? '#000000' : '#dc3b5a')}; 
    margin: 8px;
    border-radius: 12px;
    height: 542px;

`

const Logo = styled.a`

`

export { HeaderContainer, Logo }