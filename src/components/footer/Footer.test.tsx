import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react/pure'

import Footer from './Footer'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

beforeAll(() => {
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  )
})

describe('<Footer />', () => {
  it('should render social networks', () => {
    expect(
      screen.getByRole('link', {
        name: /Github/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /Linkedin/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /Twitter/i
      })
    ).toBeInTheDocument()
  })

  it('should have social networks links', () => {
    expect(
      screen.getByRole('link', {
        name: /Github/i
      })
    ).toHaveAttribute('href', 'https://github.com/italogois')

    expect(
      screen.getByRole('link', {
        name: /Linkedin/i
      })
    ).toHaveAttribute('href', 'https://www.linkedin.com/in/italogois/')

    expect(
      screen.getByRole('link', {
        name: /Twitter/i
      })
    ).toHaveAttribute('href', 'https://twitter.com/italogois_')
  })
})
