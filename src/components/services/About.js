import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../titles/SectionTitle';
import ParagraphText from '../paragraphTexts/ParagraphText';
import AboutImg from '../../assets/images/about.png';

const AboutStyles = styled.div`
  padding: 10rem 0;
  /* height: 100vh; */
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
  .business__name {
    margin-bottom: 1rem;
    font-size: 3rem;
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

function About() {
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__info">
            <ParagraphText className="about__subtitle">About Me</ParagraphText>
            <SectionTitle className="about__title">
              Just a girl and her camera
            </SectionTitle>
            <ParagraphText className="about__desc">
              Growing up I have always seen things from a different perspective.
              Add that to my passion for bringing joy to people and you have
              <br /> <br />
              <span className="business__name">endless summer moments</span>
            </ParagraphText>
          </div>
          <div className="about__image">
            <img src={AboutImg} alt="pic" className="profile" />
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default About;
