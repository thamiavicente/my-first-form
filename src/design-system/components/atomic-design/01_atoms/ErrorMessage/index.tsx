import * as S from './styles'
import { Props } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export function ErrorMessage({errorMessage = 'Operação inválida'}: Props) {
  return (
    <S.ErrorMessage>
      <FontAwesomeIcon
        className="font-awesome-icon"
        icon={faCircleExclamation}
      />
      <S.ErrorMessageText>
        { errorMessage }
      </S.ErrorMessageText>
    </S.ErrorMessage>
  )
}