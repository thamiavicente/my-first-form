import * as S from './styles'
import { Props } from './types'

export function Input({placeholder, value = '', register}: Props) {
  return (
    <S.Input
      className="input"
      placeholder={placeholder}
      defaultValue={value}
      {...register}
    />
  )
}