import styled from 'styled-components'

export const Container = styled.div`
  > button {
    width: 100%;
    height: 5.4rem;
    display: flex;
    align-items: center;
    padding: 1.6rem;
    justify-content: center;
    gap: 8px;

    border-radius: 8px;
    border: 0;

    background: ${props => props.theme.colors.BLUE_DARK};
    color: ${props => props.theme.colors.WHITE};

    &:hover {
      background: ${props => props.theme.colors.BLUE};
    }
  }
`
