import React, { useEffect, useState } from 'react'
import { HeaderContainer, Logo } from './Header.styled';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Icon } from '../Icon';
// import { ReactComponent as ApeLogo } from '../../assets/icons/logo.svg';

// const ApeLogo = () => {
//   return <img src="./logo.svg" alt="Ape Logo" />;
// };

const Header: React.FC = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Logo>
      <Icon
              name="logo"
              iconWidth={{ mobile: '16px', tablet: '16px' }}
              stroke={'#e6533c'}
            />
        
      </Logo>
      <BurgerMenu/>
    </HeaderContainer>
  )
}

export default Header