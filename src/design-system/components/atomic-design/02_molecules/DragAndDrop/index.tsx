import * as S from './styles'
import { Props } from './types'

import { Description } from '../../01_atoms/Description';
import { Button } from '../../01_atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

export function DragAndDrop({descriptionText, buttonText}: Props) {
  return (
    <S.DragAndDrop className="drag-n-drop">
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
    </S.DragAndDrop>
  )
}