import * as S from './styles'
import { Props } from './types'

export function Title({titleText}: Props) {
  return (
    <S.Title
      className="title"
    >
      { titleText }
    </S.Title>
  )
}