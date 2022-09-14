import styled from 'styled-components';

export const ErrorMessage = styled.div `
  display: flex;
  gap: 5px;

  .font-awesome-icon {
    color: #d11c1c;
  }
`
export const ErrorMessageText = styled.span `
  font-family: 'Inter', 'Avenir', Helvetica, Arial, sans-serif;
  color: #d11c1c;
  font-size: 0.9rem;
`