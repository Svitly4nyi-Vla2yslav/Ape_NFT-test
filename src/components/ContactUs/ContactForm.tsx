
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { successMessage } from './SuccessMessage';
import { ButtonSubmit, ButtonTextContact } from './ContactUs.styled';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import discord from "../../assets/icons/discord.svg"

interface FormValues {
    email: string;
    name: string;
  }
  
 

export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mjvnpjav");
  if (state.succeeded) {
      successMessage();
  }


  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='@username'
        src={discord}
        prefix={discord}
        
        
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"

      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <ButtonSubmit type="submit" disabled={state.submitting}>
       <ButtonTextContact>Mint</ButtonTextContact>
      </ButtonSubmit>
    </form>
  );
}