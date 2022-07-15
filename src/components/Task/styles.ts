import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.6rem;
  background-color: ${props => props.theme.colors.GRAY_500};
  border-radius: 8px;

  display: flex;
  align-items: center;

  > div:nth-child(2) {
    width: 100%;

    p {
      flex: 1;
      margin: 0 5.2rem;
    }
  }

  > button {
    border: 0;
    background: transparent;

    margin-bottom: 2rem;

    color: ${props => props.theme.colors.GRAY_300};
  }
`
export const FormCheck = styled.div`
  margin-left: 1.6rem;

  margin-bottom: 2rem;
`
