import * as S from './styles'

import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  type Menu = {
    name: string
    uri: string
  }

  const menu: Menu[] = [
    {
      name: 'Início',
      uri: '/'
    },
    {
      name: 'Sobre',
      uri: '/sobre'
    },
    {
      name: 'Blog',
      uri: '/blog'
    }
  ]

  return (
    <>
      <S.Nav>
        {menu.map(menuItem => (
          <Link key={menuItem.name} href={menuItem.uri}>
            <a>{menuItem.name}</a>
          </Link>
        ))}
      </S.Nav>
    </>
  )
}
