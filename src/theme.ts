import { createGlobalStyle, DefaultTheme } from 'styled-components'
import background from './assets/images/star-background.jpg'

export const theme: DefaultTheme = {
  colors: {
    primary: '#e8e400',
  },
}

export const GlobalStyle = createGlobalStyle`
 html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 20px;
    background: url(${background}) no-repeat center center;
    background-size: cover;
    overflow: hidden;
    box-sizing: border-box;
    font-family: arial, sans-serif;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10vh 0 0 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`
