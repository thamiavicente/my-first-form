import * as S from './styles'
import { Props } from './types'
import {useDropzone} from 'react-dropzone'
import {useCallback, useState} from 'react'

import { Description } from '../../01_atoms/Description';
import { Button } from '../../01_atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

export function DragAndDrop({descriptionText, buttonText}: Props) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles[0]);
  }, [])
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop, maxFiles: 1})

  return (
    <S.DragAndDrop {...getRootProps()} className="drag-n-drop" isActive={isDragActive}>
      <input {...getInputProps()} />
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