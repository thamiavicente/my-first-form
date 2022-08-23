import styled from 'styled-components';

type Props = {
  placeholder: string;
  value: string;
}

export function Input({placeholder, value}: Props) {
  const Input = styled.input `
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    border: 1px #9f9f9f solid;
    border-radius: 4px;
    padding: 28px 12px 10px;
    color: #000;
    margin-bottom: 20px;
    width: calc(100% - 26px);

    ::placeholder {
      color: #000;
    }

    :focus,
    :active,
    :focus-visible {
      outline: 1px #1e76d8 solid;
      border: 1px transparent solid;
    }
  `

  return (
    <Input
      className="input"
      placeholder={placeholder}
      value={value}
    />
  )
}