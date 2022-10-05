import styled from "styled-components";
import { DragAndDropComponent } from "./types";

export const DragAndDrop = styled.div<DragAndDropComponent>`
  @media (min-width: 1024px) {
    flex-direction: row;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props?.isActive ? "2px #1e76d8 dashed" : "2px #9f9f9f dashed"};
  padding: 30px;
  border-radius: 8px;
  margin: 20px 0 40px;
  cursor: pointer;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  .font-awesome-icon {
    @media (min-width: 1024px) {
      font-size: 14px;
    }

    color: #1e76d8;
    font-size: 24px;
  }

  .description {
    @media (min-width: 1024px) {
      margin: 0 20px 0 10px;
    }

    margin: 10px 0 20px;
    text-align: center;
  }

  .button {
    @media (min-width: 1024px) {
      width: 20%;
    }

    &:hover {
      color: #9f9f9f;
      background: #e3e9f9;
      border: #e3e9f9;
    }

    padding: 8px;
    color: #9f9f9f;
    background: #e3e9f9;
    border: #e3e9f9;
    width: 100%;
  }
`;
export const UlSelectedFiles = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;

  li {
    display: flex;
    align-items: flex-start;
    list-style-type: none;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin-right: 12px;
  }
`;
