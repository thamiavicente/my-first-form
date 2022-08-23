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
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px #9f9f9f dashed;

    &__font-awesome-ico {
      color: #1e76d8;
      font-size: 12px;
    }
  `

  return (
    <DragAndDrop>
      <FontAwesomeIcon
        className="drag-n-drop__font-awesome-icon"
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