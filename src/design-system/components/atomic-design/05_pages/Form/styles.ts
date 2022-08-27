import styled from 'styled-components';

export const Form = styled.form `
  @media (min-width: 1024px) {
    width: 80%;
    max-width: 768px;
  }

  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;

  .button {
    @media (min-width: 1024px) {
      width: 24%;
      align-self: flex-end;
    }
    
    width: 100%;
  }
`