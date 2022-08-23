import styled from 'styled-components';
import { Field } from '../../02_molecules/Field';

type Props = {
  inputPlaceholderLeft: string;
  inputValueLeft: string;
  labelTextLeft: string;
  inputPlaceholderRight: string;
  inputValueRight: string;
  labelTextRight: string;
}

export function SideBySideInput({
  inputPlaceholderLeft,
  inputValueLeft,
  labelTextLeft,
  inputPlaceholderRight,
  inputValueRight,
  labelTextRight
  }: Props) {
  const SideBySideInput = styled.div `
    display: flex;
    justify-content: space-between;
  `

  return (
    <SideBySideInput>
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
    </SideBySideInput>
  )
}