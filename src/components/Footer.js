import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Logo from './Logo';
import ParagraphText from './paragraphTexts/ParagraphText';

const FooterStyles = styled.footer`
  background-color: var(--lightTeal_2);
  padding: 10rem 0;
  .footer__wrapper {
    text-align: center;
  }
  .footer__logo {
    max-width: 120px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .footer__desc {
    color: var(--darkTeal_4);
    max-width: 350px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .footer__links {
    margin-bottom: 2rem;
    li {
      display: inline-block;
      margin: 0 1rem;
    }
    a {
      font-size: 1.6rem;
      color: var(--darkTeal_4);
      line-height: 1.5rem;
    }
    li:hover {
      a {
        color: var(--white);
        text-decoration: underline;
      }
    }
  }
  .footer__copyright {
    font-size: 1.2rem;
    color: var(--darkTeal_4);
  }
  @media only screen and (max-width: 768px) {
    .footer__links {
      a {
        font-size: 1.4rem;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__wrapper">
          <Link to="home" smooth>
            <Logo className="footer__logo" />
          </Link>
          <ParagraphText className="footer__desc">
            Ashleigh is a passionate photographer whose goal is to capture those
            special moments in time.
          </ParagraphText>
          <div className="footer__links">
            <ul>
              <li>
                <Link to="home" smooth>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth>
                  About
                </Link>
              </li>
              {/* <li>
                  <Link to="equipment" smooth>
                    Equipment
                  </Link>
                </li> */}
              <li>
                <Link to="gallery" smooth>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="latest" smooth>
                  Latest
                </Link>
              </li>
              <li>
                <Link to="shop" smooth>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="contact" smooth>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ParagraphText className="footer__copyright">
            © DBC 2022
          </ParagraphText>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
