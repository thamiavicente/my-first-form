import * as S from './styles'
import { Props } from './types'

export function Label({labelText}: Props) {
  return (
    <S.LabelInput
      className="label"
    >
     { labelText }
    </S.LabelInput>
  )
}