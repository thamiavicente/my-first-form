import styled from 'styled-components';

export const SideBySideInput = styled.div `
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