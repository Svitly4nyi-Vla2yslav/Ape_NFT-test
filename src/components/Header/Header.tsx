
import React, { useState } from 'react';
import { HeaderContainer, Logo } from './Header.styled';
import BurgerMenu, { BurgerMenuProps } from '../BurgerMenu/BurgerMenu'; 

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer isOpen={isOpen} toggleMenu={toggleMenu}>
      <Logo>😁</Logo>
    
      <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </HeaderContainer>
  );
};

export default Header;
