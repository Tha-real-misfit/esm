import { createGlobalStyle } from 'styled-components';
import themeList from '../data/themeList';
// Typography
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

const GlobalStyles = createGlobalStyle`
:root{
  /* colors */
  /* --darkBlue_1: #3B447A;
  --darkBlue_2: #222B5F;
  --darkBlue_3: #0A0F19;
  --darkBlue_4: #101826;
  --mediumSlateBlue: #6C62E2;
  --lightBlue_1: #F3F1FE;
  --lightBlue_2: #ADBDE3;
  --white: #FFFFFF;
  --black: #000000; */
  /* teal */
  --darkTeal_1: #3b7a75;
  --darkTeal_2: #225f5f;
  --darkTeal_3: #0a1919;
  --darkTeal_4: #102526;
  --mediumSlateTeal: #62d9e2;
  --lightTeal_1: #f1fefe;
  --lightTeal_2: #ade3e0;
  --white: #FFFFFF;
  --black: #000000;
  --contactButton: rgb(219, 145, 237);
  --logoYellow: #d3cc9f;
  /* others */
    --header-height: 50px;
    --header-height_2: 60px;
}
html{
  font-size: 10px;
}
body{
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--lightTeal_1)' : 'var(--darkTeal_1)'};
  font-family: 'Poppins', sans-serif;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  cursor: pointer;
}
ul, li{
  list-style: none;
}
.container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
img, svg{
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyles;
