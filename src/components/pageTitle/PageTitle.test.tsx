import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react/pure'

import PageTitle from './PageTitle'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

beforeAll(() => {
  render(
    <ThemeProvider theme={theme}>
      <PageTitle title="titulo" />
    </ThemeProvider>
  )
})

describe('<PageTitle />', () => {
  it('should render title with content', () => {
    expect(screen.getByRole('heading')).not.toBeEmptyDOMElement()
  })
})
