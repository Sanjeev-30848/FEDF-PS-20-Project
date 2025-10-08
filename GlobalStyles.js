// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const COLORS = {
  primary: '#5A47FF',
  primaryDark: '#4736E5',
  textDark: '#1F2937',
  textLight: '#F9FAFB',
  backgroundMain: '#FFFFFF',
  backgroundLightGrey: '#F8F9FA',
  border: '#E5E7EB',
  placeholder: '#9CA3AF',
  inputBg: '#F3F4F6',
};

export const BREAKPOINTS = {
  tablet: '768px',
  mobile: '480px',
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: ${COLORS.textDark};
    background-color: ${COLORS.backgroundMain};
  }
  
  a {
    text-decoration: none;
    color: ${COLORS.primary};
  }
`;

export default GlobalStyle;