import styled from 'styled-components'
import BackgroundAfter from '../../images/header-after.svg'

export const Header = styled.header`
  background-color: #f79d69;
  text-align: center;
  position: relative;
  margin-bottom: 6rem;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 6.7rem;
    background-image: url(${BackgroundAfter});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media only screen and (min-width: 51rem) {
    margin-bottom: 13rem;

    &:after {
      height: 19.7rem;
    }
  }
`

export const PageTitle = styled.h1`
  color: #491c01;
  margin-top: 5.2rem;
`

export const PageDescription = styled.h3`
  color: #491c01;
  margin-bottom: 5.2rem;
`

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Item = styled.div`
  a {
    color: #feefe6;
    font-weight: bold;
    text-decoration: none;
    padding: 0 1.6rem;
  }
`
