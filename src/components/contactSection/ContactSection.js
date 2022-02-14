// import emailjs from 'emailjs-com';
// import React, { useRef, useState } from 'react';
import styled from 'styled-components';
// import PrimaryButton from '../buttons/PrimaryButton';
import ContactMe from '../contactMe/ContactMe';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
// import FormField from './FormField';

// import ContactForm from '../contact/ContactForm';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .contact__info {
    margin-bottom: 4rem;
  }
  .contact__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
    .contact__field--fullWidth {
      grid-column: span 2;
    }
    .contact__submit {
      width: max-content;
      cursor: pointer;
    }
    .result {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact__form {
      grid-template-columns: 1fr;
      row-gap: 2rem;
      .contact__field--fullWidth {
        grid-column: span 1;
      }
    }
  }
`;

export default function ContactSection() {
  // const formRef = useRef();
  // const [done, setDone] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   //   // e.reset();
  //   emailjs
  //     .sendForm(
  //       'service_7sxro5o',
  //       'template_m1p4ib4',
  //       formRef.current,
  //       'user_Vyb7JRzYfkT1wAmCYVyau'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <ContactSectionStyles id="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <SectionTitle>Get In Touch</SectionTitle>
            <ParagraphText>I would love to hear from you.</ParagraphText>
          </div>
          <div>
            {/* <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact__form"
            >
              <FormField
                className="contact__field--fullWidth"
                input
                type="text"
                placeholder="Name"
                name="user_name"
                id="name"
                // required
              />
              <FormField
                input
                type="text"
                placeholder="Subject"
                name="user_subject"
                id="subject"
                // required
              />
              <FormField
                input
                type="text"
                placeholder="Email"
                name="user_email"
                id="email"
                // required
              />
              <FormField
                className="contact__field--fullWidth"
                textarea
                rows="5"
                placeholder="Message"
                name="message"
                id="message"
              />

              <PrimaryButton
                type="submit"
                buttonType="submit"
                className="contact__submit"
              >
                Submit
              </PrimaryButton>
              {done && (
                <b className="result"> Thank you, i will be in touch...</b>
              )}
            </form> */}
            {/* <ContactForm /> */}
            <ContactMe />
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}
