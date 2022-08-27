import * as S from './styles'
import { Props } from './types'

import { Input } from '../../01_atoms/Input';
import { Label } from '../../01_atoms/Label';

import { FieldValues, UseFormRegister } from 'react-hook-form';

export function Field({inputPlaceholder, inputValue, labelText, register}: Props) {
  return (
    <S.Field className="field">
      <Input
        placeholder={inputPlaceholder}
        value={inputValue}
        register={register}
      />

      <Label
        labelText={labelText}
      />
    </S.Field>
  )
}