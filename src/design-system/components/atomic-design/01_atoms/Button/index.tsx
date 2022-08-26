import * as S from './styles'
import { Props } from './types'

export function Button({type, buttonText}: Props) {


  return (
    <S.Button
      className="button"
      type={type}
    >
      { buttonText }
    </S.Button>
  )
}