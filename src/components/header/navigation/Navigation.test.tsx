import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react/pure'

import Navigation from './Navigation'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../styles/theme'

beforeAll(() => {
  render(
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  )
})

describe('<Navigation />', () => {
  it('should render menu items', () => {
    expect(
      screen.getByRole('link', {
        name: /início/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /sobre/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /blog/i
      })
    ).toBeInTheDocument()
  })

  it('should contains uri', () => {
    expect(
      screen.getByRole('link', {
        name: /início/i
      })
    ).toHaveAttribute('href', '/')

    expect(
      screen.getByRole('link', {
        name: /blog/i
      })
    ).toHaveAttribute('href', '/blog')

    expect(
      screen.getByRole('link', {
        name: /sobre/i
      })
    ).toHaveAttribute('href', '/sobre')

    expect(screen.getAllByRole('link').length).toEqual(3)
  })

  it('should contains three items', () => {
    expect(screen.getAllByRole('link').length).toEqual(3)
  })
})
