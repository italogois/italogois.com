import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react/pure'

import Intro from './Intro'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

beforeAll(() => {
  render(
    <ThemeProvider theme={theme}>
      <Intro />
    </ThemeProvider>
  )
})

describe('<Intro />', () => {
  it('should render logo italo', () => {
    expect(screen.getByRole('img', { name: /logo italo/i })).toBeInTheDocument()
  })
})
