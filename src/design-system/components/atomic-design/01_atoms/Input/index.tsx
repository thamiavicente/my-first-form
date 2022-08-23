import styled from 'styled-components';

type Props = {
  placeholder: string;
  value: string;
}

export function Input({placeholder, value}: Props) {
  const Input = styled.input `
    border: 1px #9f9f9f solid;
    padding: 30px 24px 20px;
    color: #000;
  `

  return (
    <Input
      className="input"
      placeholder={placeholder}
      value={value}
    />
  )
}