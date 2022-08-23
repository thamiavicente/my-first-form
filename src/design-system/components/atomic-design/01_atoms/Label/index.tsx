import styled from 'styled-components';

type Props = {
  labelText: String;
}

export function Label({labelText}: Props) {
  const LabelInput = styled.label `
    color: "#9f9f9f";
    position: absolute;
    top: 0;
    left: 0;
  `

  return (
    <LabelInput
      className="label-input"
    >
     { labelText }
    </LabelInput>
  )
}