import React, { useState } from 'react';

import {
  BurgerMenuButton,
  ContainerMenu,
  ContainerNetworks,
  Link,
  MenuItem,
  Wrapper,
} from './BurgerMenu.styled';
import Icon from '../Icon/Icon';

export interface BurgerMenuProps {
  isOpen: boolean;
}

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <BurgerMenuButton onClick={toggleMenu}> MENU </BurgerMenuButton>
      <ContainerMenu isOpen={isOpen as BurgerMenuProps['isOpen']}>
       <button> <MenuItem id="about">ABOUT</MenuItem></button>
       <button> <MenuItem id="mind-map">MIND-MAP</MenuItem></button>
       <button> <MenuItem id="faq">FAQ</MenuItem></button>
       <button><MenuItem id="arts">ARTS</MenuItem></button>
       <button><MenuItem id="mint">MINT</MenuItem></button> 
      </ContainerMenu>
      <ContainerNetworks>
        <Link>
          a{' '}
          <Icon
            name={'logo'}
            iconWidth={{
              mobile: '',
              tablet: '',
            }}
          />{' '}
        </Link>
        <Link>a</Link>
        <Link>a</Link>
      </ContainerNetworks>
    </Wrapper>
  );
};

export default BurgerMenu;
