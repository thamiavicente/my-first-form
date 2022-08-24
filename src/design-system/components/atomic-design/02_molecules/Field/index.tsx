import styled from 'styled-components';
import { Input } from '../../01_atoms/Input';
import { Label } from '../../01_atoms/Label';

type Props = {
  inputPlaceholder: string;
  inputValue?: string;
  labelText: string;
}

export function Field({inputPlaceholder, inputValue, labelText}: Props) {
  const Field = styled.div `
    position: relative;
  `

  return (
    <Field className="field">
      <Input
        placeholder={inputPlaceholder}
        value={inputValue}
      />

      <Label
        labelText={labelText}
      />
    </Field>
  )
}