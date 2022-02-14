import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import themeList from '../data/themeList';
import Logo from './Logo';
import ParagraphText from './paragraphTexts/ParagraphText';
import ThemeSwitcher from './ThemeSwitcher';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height_2);
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--lightTeal_1)' : 'var(--darkTeal_1)'};
  border-bottom: 1px solid var(--mediumSlateTeal);
  z-index: 1000;
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 1rem 0; */
  }
  nav ul li {
    display: inline-block;
    margin: 0 0.5rem;
    a {
      font-size: 1.2rem;
      font-weight: 500;
      display: inline-block;
      padding: 0.5rem 1rem;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--darkTeal_2)' : 'var(--lightTeal_1)'};
    }
    &:hover {
      a {
        text-decoration: underline;
      }
    }
  }
  .navMenu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .email__info {
    padding-top: 15px;
  }
  .menuIcon,
  .closeIcon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 10px;
    padding: 3px;
    border-radius: 4px;
    svg {
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--darkTeal_2)' : 'var(--lightTeal_1)'};
    }
    &:hover {
      background-color: #8080803b;
    }
  }
  .closeIcon {
    position: absolute;
    right: 10px;
    top: 10px;
    &:hover {
      svg {
        color: var(--white);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      width: 90%;
      max-width: 250px;
      top: 0;
      right: 0;
      background: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--lightTeal_2)' : 'var(--darkTeal_4)'};
      height: 100vh;
      z-index: 100;
      transform: translateX(100%);
      transition: 0.3s ease transform;
      overflow: hidden;
    }
    nav.open {
      transform: translateX(0);
    }
    nav ul li {
      display: block;
      text-align: right;
      width: 100%;
      margin: 0.5rem 0;
      a {
        display: block;
        width: 100%;
      }
    }
    .email__info {
      font-size: 10px;
    }
  }
`;

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    });
  }, []);

  return (
    <HeaderStyles>
      <div className="container">
        <div className="navigation">
          <Link to="home" smooth>
            <Logo />
          </Link>
          <ParagraphText>
            <p className="email__info">esmoments15@gmail.com</p>
          </ParagraphText>
          <div className="navMenu">
            <nav className={isMobile && isNavOpen ? 'open' : undefined}>
              {isMobile && (
                <div
                  className="closeIcon"
                  tabIndex="0"
                  role="button"
                  onClick={() => setIsNavOpen(false)}
                  onKeyDown={() => setIsNavOpen(false)}
                >
                  <FiX />
                </div>
              )}
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
            </nav>
            <ThemeSwitcher />
            {isMobile && (
              <div
                className="menuIcon"
                tabIndex="0"
                role="button"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <FiMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}
