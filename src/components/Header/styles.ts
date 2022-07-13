import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 20rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  background: ${props => props.theme.colors.GRAY_700};

  > img {
    width: 2.2rem;
    height: 3.6rem;
  }

  > div {
    font-size: 4rem;
    font-weight: 700;

    span:first-child {
      color: ${props => props.theme.colors.BLUE};
    }

    span {
      color: ${props => props.theme.colors.BLUE_DARK};
    }
  }
`
