import * as S from './styles'

import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <>
      <S.Intro>
        <Image
          src="/assets/images/italoLogo.svg"
          alt="Logo Italo"
          width={522}
          height={95}
        />
      </S.Intro>
    </>
  )
}
