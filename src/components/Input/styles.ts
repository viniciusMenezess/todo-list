import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > input {
    width: 100%;
    height: 5.4rem;
    background: ${props => props.theme.colors.GRAY_500};
    padding: 1.6rem;

    border-radius: 8px;

    color: ${props => props.theme.colors.GRAY_100};

    border: 0;

    &::placeholder {
      color: ${props => props.theme.colors.GRAY_300};
    }
  }
`
