import styled from 'styled-components'

export const Container = styled.div`
  > label {
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.BLUE};
    border-radius: 50%;
    cursor: pointer;
    height: 2.4rem;
    position: absolute;
    width: 2.4rem;

    margin-bottom: 1.5rem;

    transition: 0.2s;

    &:hover {
      background: #0c1c26;
    }

    &:after {
      content: '';
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      height: 6px;
      left: 4.9px;
      opacity: 0;
      position: absolute;
      top: 4.5px;
      transform: rotate(-45deg);
      width: 10px;
    }
  }

  input {
    visibility: hidden;

    &:checked + label {
      background-color: ${props => props.theme.colors.PURPLE_DARK};
      border-color: ${props => props.theme.colors.PURPLE_DARK};

      transition: 0.2s;

      &:hover {
        background-color: ${props => props.theme.colors.PURPLE};
        border-color: ${props => props.theme.colors.PURPLE};
      }

      &:after {
        opacity: 1;
      }
    }
  }
`
