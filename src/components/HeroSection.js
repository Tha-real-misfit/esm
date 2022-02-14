import React from 'react';
import styled from 'styled-components';
import Link from 'react-scroll/modules/components/Link';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import HeroTitle from './titles/HeroTitle';
import Pic1 from '../assets/images/ash logo-01.png';
import themeList from '../data/themeList';

const HeroSectionStyles = styled.div`
  padding-top: calc(var(--header-height) + 10px);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .hero__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }
  .hero__info {
    flex: 3;
  }
  .hero__img {
    flex: 4;
    img {
      object-fit: contain;
    }
  }
  .hero__title {
    margin-bottom: 1.5rem;
    max-width: 400px;
  }
  .hero__desc {
    margin-bottom: 1.5rem;
    max-width: 300px;
  }
  .hero__span {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkTeal_2)' : 'var(--lightTeal_1)'};
    font-weight: 700;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
    .hero__img {
      display: flex;
      justify-content: flex-end;
      img {
        max-width: 400px;
        margin-top: auto;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionStyles id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__info">
            <HeroTitle className="hero__title">
              A moment caught in time
            </HeroTitle>
            <ParagraphText className="hero__desc">
              Is worth <span className="hero__span">MORE</span> than a thousand
              words
            </ParagraphText>
            <PrimaryButton buttonType={Link} to="contact" smooth>
              Get In Touch
            </PrimaryButton>
          </div>
          <div className="hero__img">
            <img src={Pic1} alt="Welcome" />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}
