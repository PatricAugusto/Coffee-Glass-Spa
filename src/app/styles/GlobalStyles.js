'use client'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #1e1e1e 0%, #3d2b1f 100%);
    color: #fff;
    min-height: 100vh;
  }
`;