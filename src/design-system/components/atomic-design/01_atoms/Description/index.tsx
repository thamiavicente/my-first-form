import * as S from './styles'
import { Props } from './types'

export function Description({descriptionText}: Props) {

  return (
    <S.Description
      className="description"
    >
      { descriptionText }
    </S.Description>
  )
}