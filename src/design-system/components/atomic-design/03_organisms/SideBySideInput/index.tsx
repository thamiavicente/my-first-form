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
    @media (min-width: 1024px) {
      flex-direction: row;
    }

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .field{
      @media(min-width: 1024px) {
        width: 48%;
      }

      width: 100%;
    }
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