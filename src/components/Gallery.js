import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import styled from 'styled-components';
import AboutImg from '../assets/images/profile.jpg';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';

const AboutStyles = styled.div`
  padding: 10rem 0;
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateTeal);
  }
  .about__title {
    margin-bottom: 2rem;
    max-width: 300px;
  }
  .about__image {
    max-width: 400px;
    padding: 2rem;
  }
  .profile {
    max-width: 600px;
    padding: 2px;
    border-radius: 200px;
  }

  .about__desc {
    margin-bottom: 2rem;
    max-width: 300px;
  }

  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
    .about__image {
      max-width: 400px;
    }
  }
`;

function AboutSection() {
  return (
    <AboutStyles id="gallery">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__image">
            <img src={AboutImg} alt="pic" className="profile" />
          </div>
          <div className="about__info">
            <ParagraphText className="about__subtitle">Who am i?</ParagraphText>
            <SectionTitle className="about__title">
              Capturing Life As It Happens
            </SectionTitle>
            <ParagraphText className="about__desc">
              Endless Summer Moments is about more then the click of a camera
              button, its capturing those moments in life that can be cherished
              forever. With knowledge gained from multiple photography studies
              and with an eye for detail, i am able to capture each image in its
              most enhanced form by using natural lights and different angles.{' '}
              <br />
              My Services Include: <br /> - Personalised photo shoots <br /> -
              Personalised Macro photography <br /> - Event Photography and much
              more...
            </ParagraphText>

            <PrimaryButton buttonType={Link} to="contact" smooth>
              Get in touch
            </PrimaryButton>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
