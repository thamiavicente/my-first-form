import styled from 'styled-components';

export const Input = styled.input `
  border: 1px #9f9f9f solid;
  border-radius: 4px;
  padding: 28px 12px 10px;
  color: #000;
  margin: 10px 0;
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