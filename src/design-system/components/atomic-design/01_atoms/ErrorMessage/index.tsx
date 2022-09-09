import * as S from './styles'
import { Props } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export function ErrorMessage({errorMessage = 'Operação inválida'}: Props) {
  return (
    <S.Container>
      <FontAwesomeIcon
        className="font-awesome-icon"
        icon={faCircleExclamation}
      />
      <S.ErrorMessage>
        { errorMessage }
      </S.ErrorMessage>
    </S.Container>
  )
}