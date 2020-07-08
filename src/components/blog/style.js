import styled from 'styled-components'

export const PostCardLayout = styled.div`
  margin-bottom: 2.6rem;
  padding-bottom: 2.6rem;
  border-bottom: 1px solid #eeeeee;
  flex-direction: column;

  a {
    color: #f36c1e;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #da5305;
    }
  }

  @media only screen and (min-width: 51rem) {
    flex-direction: row;
  }
`

export const PostInfoLayout = styled.div`
  display: flex;
  margin-top: 0.8rem;

  svg {
    margin-right: 0.3rem;
  }
`

export const Date = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.4rem;
`

export const Read = styled.div`
  display: flex;
  align-items: center;
`

export const Comments = styled.div`
  margin-top: 5rem;
`

export const Pagination = styled.div`
  text-align: center;
`

export const Navigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const CurrentPage = styled.div`
  font-style: italic;
  margin-bottom: 2.4rem;
`
