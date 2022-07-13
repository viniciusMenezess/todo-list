import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  :root {
    font-size:62.5%;
  }

  body {
    background: ${props => props.theme.colors.GRAY_600};
    color: ${props => props.theme.colors.WHITE};
  }
  
  body, textarea, button, input {
    font-size:1.6rem;
    font-family: "Inter", serif;
    line-height: 140%;
  } 

  a {
    text-decoration: none;
  }

  button, a {
    cursor:pointer;
    transition: filter .2s
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }
`
