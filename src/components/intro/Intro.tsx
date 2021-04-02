import * as S from './styles'

import Image from 'next/image'

export default function Intro(): JSX.Element {
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