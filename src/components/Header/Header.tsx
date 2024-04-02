import React, { useState } from 'react';
import { HeaderContainer, Logo, LogoIcon } from './Header.styled';
import BurgerMenu, { BurgerMenuProps } from '../BurgerMenu/BurgerMenu';
import logo from '../../assets/icons/logo.svg';
import Hero from '../Hero/Hero';
const Header: React.FC = () => {
  const [isopen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isopen);
  };

  return (
    <HeaderContainer isopen={isopen} >
      <Logo>
        <LogoIcon src={logo} alt="Logo" />
      </Logo>
      <Hero isopen={isopen}  />
      <BurgerMenu isopen={isopen} toggleMenu={toggleMenu} />
    </HeaderContainer>
  );
};

export default Header;
