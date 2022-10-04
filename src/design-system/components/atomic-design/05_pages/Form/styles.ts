import styled from "styled-components";

export const Form = styled.form`
  @media (min-width: 1024px) {
    width: 80%;
    max-width: 768px;
  }

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-column-gap: 20px;
  margin: auto;
  width: 90%;

  .button {
    @media (min-width: 1024px) {
      width: 24%;
      align-self: flex-end;
    }

    grid-column-start: 1;
    grid-column-end: 3;
    width: 100%;
  }

  div {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  div:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  div:nth-child(3) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;
