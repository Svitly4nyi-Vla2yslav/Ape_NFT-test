import React, { useState } from 'react';

import {
  BurgerMenuButton,
  ButtonMenu,
  ContainerMenu,
  ContainerNetworks,
  Link,
  MenuItem,
  TextButton,
  Wrapper,
} from './BurgerMenu.styled';
import Icon from '../Icon/Icon';

export interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, toggleMenu }) => {


  return (
    <Wrapper >
      <BurgerMenuButton onClick={toggleMenu}>
        <TextButton> {isOpen ? 'CLOSE' : 'MENU'}</TextButton>
      </BurgerMenuButton>
      <ContainerMenu isOpen={isOpen} >
      
        <ButtonMenu>
          <MenuItem id="about">ABOUT</MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem id="mind-map">MIND-MAP</MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem id="faq">FAQ</MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem id="arts">ARTS</MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem id="mint">MINT</MenuItem>
        </ButtonMenu>
      </ContainerMenu>
      <ContainerNetworks>
        <Link>a</Link>
        <Link>a</Link>
        <Link>a</Link>
      </ContainerNetworks>
    </Wrapper>
  );
};

export default BurgerMenu;
