import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 112rem;
  margin: 0 auto;
`

export const AddTask = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: -2.6rem;
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 6.4rem;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > strong {
      color: ${props => props.theme.colors.BLUE};
    }

    > span {
      font-size: 1.2rem;
      font-weight: 700;
      background: ${props => props.theme.colors.GRAY_400};
      border-radius: 9.99rem;
      padding: 0rem 0.8rem;
    }
  }

  > div:nth-child(2) {
    > strong {
      color: ${props => props.theme.colors.BLUE_DARK};
    }
  }
`

export const TaskList = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top: 1px solid ${props => props.theme.colors.GRAY_300};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  margin-top: 3rem;
  padding: 6.4rem 0;

  > strong {
    margin-top: 1.6rem;

    color: ${props => props.theme.colors.GRAY_300};
  }

  > p {
    color: ${props => props.theme.colors.GRAY_300};
  }
`
