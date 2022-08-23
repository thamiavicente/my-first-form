import styled from 'styled-components';
import { Description } from '../../01_atoms/Description';
import { Button } from '../../01_atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

type Props = {
  descriptionText: string;
  buttonText: string;
}

export function DragAndDrop({descriptionText, buttonText}: Props) {

  const DragAndDrop = styled.div `
    @media (min-width: 1024px) {
      flex-direction: row;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px #9f9f9f dashed;
    padding: 30px;
    border-radius: 8px;
    margin: 20px 0 40px;
    cursor: pointer;
    flex-direction: column;

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
  `

  return (
    <DragAndDrop className="drag-n-drop">
      <FontAwesomeIcon
        className="font-awesome-icon"
        icon={faCloudArrowUp}
      />
      <Description
        descriptionText={descriptionText}
      />
      <Button
        buttonText={buttonText}
      />
    </DragAndDrop>
  )
}