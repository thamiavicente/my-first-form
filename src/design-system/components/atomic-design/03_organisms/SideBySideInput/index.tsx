import * as S from './styles'
import { Props } from './types'

import { Field } from '../../02_molecules/Field';

export function SideBySideInput({
  inputPlaceholderLeft,
  inputValueLeft,
  labelTextLeft,
  inputPlaceholderRight,
  inputValueRight,
  labelTextRight
  }: Props) {

  return (
    <S.SideBySideInput>
      <Field
        inputPlaceholder={inputPlaceholderLeft}
        inputValue={inputValueLeft}
        labelText={labelTextLeft}
      />

      <Field
        inputPlaceholder={inputPlaceholderRight}
        inputValue={inputValueRight}
        labelText={labelTextRight}
      />
    </S.SideBySideInput>
  )
}