import React from 'react';
import {
  ContactContainer,
  ContactText,
  IconX,
  TitleContact,
} from './ContactUs.styled';

const ContactUs: React.FC = () => {
  return (
    <ContactContainer>
      <TitleContact>Are you in?</TitleContact>
      <IconX></IconX>
      <ContactText>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </ContactText>
    </ContactContainer>
  );
};

export default ContactUs;
