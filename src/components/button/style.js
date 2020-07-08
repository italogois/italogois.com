import styled from 'styled-components'

export const ButtonLink = styled.div`
  text-align: ${({ align }) => align ?? 'initial'};

  a {
    background-color: #f36c1e;
    color: #fff;
    text-decoration: none;
    padding: 0.8rem 2.4rem;
    border-radius: 0.7rem;

    &:hover {
      background-color: #da5305;
      color: #fff;
    }
  }
`
