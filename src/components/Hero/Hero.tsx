import React from 'react';
import {
  ButtonMeetApes,
  HeroContainer,
  HeroImage,
  TextBuroScript,
  TextGrotesk,
  TextGroteskTitle,
  TextMessina,
} from './Hero.styled';
import heroImage from '../../assets/image/heroImage.png';
import { BurgerMenuProps } from '../BurgerMenu/BurgerMenu';
const Hero: React.FC<BurgerMenuProps> = ({ isopen }) => {
  return (
    <HeroContainer  isopen={isopen ? true : false || undefined} >
      <TextBuroScript>diD yOu seE iT ?</TextBuroScript>
      <TextGroteskTitle>YACHT APES</TextGroteskTitle>
      <TextBuroScript>Apes aRe eveRywhere</TextBuroScript>
      <HeroImage src={heroImage} alt="Hero Apes" />
      <ButtonMeetApes><a href="#mind-map" target='_self'>
        <TextGrotesk>MEET APES</TextGrotesk></a>
      </ButtonMeetApes>
      <TextMessina>
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </TextMessina>
    </HeroContainer>
  );
};

export default Hero;
