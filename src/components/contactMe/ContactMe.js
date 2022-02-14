import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const ContactMeStyles = styled.div`
  .ContactMe {
    text-align: center;
    max-width: 300px;
    margin: 20px auto;
  }
  Form {
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
  }
  .button {
    background: var(--contactButton);
    padding: 1.5rem 2rem;
    color: var(--white);
    font-size: 1.6rem;
    text-transform: capitalize;
    border-radius: 8px;
    font-weight: 500;
    border: none;
    font-family: 'Poppins', sans-serif;
    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
      padding: 1.2rem 1.5rem;
    }
  }
  .ui.form {
    /* background-color: var(--mediumSlateTeal); */
  }
  .ui.form .field > label {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkTeal_1)' : 'var(--lightTeal_2)'};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2rem;
  }
  .ui.form .ui.input input {
    border-radius: 1rem;
    background-color: var(--white);
  }
  .ui.form textarea {
    border-radius: 1rem;
    background-color: var(--white);
  }
`;

const SERVICE_ID = 'service_7sxro5o';
const TEMPLATE_ID = 'template_4v5sy7x';
const USER_ID = 'user_Vyb7JRzYfkTlwAmCYVyau';

const ContactMe = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <ContactMeStyles className="ContactMe">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button
          type="submit"
          className="button"
          // color="pink"
        >
          Submit
        </Button>
      </Form>
    </ContactMeStyles>
  );
};
export default ContactMe;
