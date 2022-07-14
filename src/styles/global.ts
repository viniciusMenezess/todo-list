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

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.PURPLE_DARK}
  }

  body {
    background: ${props => props.theme.colors.GRAY_600};
    color: ${props => props.theme.colors.WHITE};
    -webkit-font-smoothing: antialiased;
  }
  
  body, textarea, button, input {
    font-size:1.6rem;
    font-family: "Inter", serif;
    line-height: 140%;
  } 

  button {
    cursor:pointer;
    transition: .2s
  }
`
