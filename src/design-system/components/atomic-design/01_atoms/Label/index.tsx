import styled from 'styled-components';

type Props = {
  labelText: String;
}

export function Label({labelText}: Props) {
  const LabelInput = styled.label `
    color: #9f9f9f;
    position: absolute;
    top: 8px;
    left: 12px;
    font-size: 12px;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  `

  return (
    <LabelInput
      className="label"
    >
     { labelText }
    </LabelInput>
  )
}