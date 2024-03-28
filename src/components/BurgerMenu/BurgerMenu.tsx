import React from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import {ContainerMenu, ContainerNetworks, Link, Wrapper } from './BurgerMenu.styled';
import Icon from '../Icon/Icon';

const BurgerMenu: React.FC = () => {
  return (
    <Wrapper>
    <Menu right width={'320px'} customBurgerIcon={<img src="/src/assets/icons/MENU.svg"/>} >
      <ContainerMenu>
        <a id="home" className="menu-item" href="/">
          ABOUT
        </a>
        <a id="about" className="menu-item" href="/mind-map">
          MIND-MAP
        </a>
        <a id="contact" className="menu-item" href="/faq">
          FAQ
        </a>
        <a id="contact" className="menu-item" href="/arts">
          ARTS
        </a>
        <a id="contact" className="menu-item" href="/mint">
          MINT
        </a>
      </ContainerMenu>
      <ContainerNetworks>
        <Link>a
          {' '}
          <Icon
            name={''}
            iconWidth={{
              mobile: '',
              tablet: '',
            }}
          />{' '}
        </Link>
        <Link>a</Link>
        <Link>a</Link>
      </ContainerNetworks>
    </Menu></Wrapper>
  );
};

export default BurgerMenu;
