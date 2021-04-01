import * as S from './styles'

type ContainerProps = {
  children: React.ReactNode
}

export default function SmallContainer({
  children
}: ContainerProps): JSX.Element {
  return (
    <>
      <S.Container>{children}</S.Container>
    </>
  )
}
