import * as S from './styles'
import { Props } from './types'

import { Field } from '../../02_molecules/Field';

export function SideBySideInput(props: Props) {

  return (
    <S.SideBySideInput>
      <Field
        inputPlaceholder={props.inputPlaceholderLeft}
        inputValue={props.inputValueLeft}
        labelText={props.labelTextLeft}
        register={props.registerLeft}
      />

      <Field
        inputPlaceholder={props.inputPlaceholderRight}
        inputValue={props.inputValueRight}
        labelText={props.labelTextRight}
        register={props.registerRight}
      />
    </S.SideBySideInput>
  )
}