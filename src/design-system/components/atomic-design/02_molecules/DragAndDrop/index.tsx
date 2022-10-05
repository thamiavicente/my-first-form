import * as S from "./styles";
import { Props } from "./types";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

import { Description, Button } from "../../01_atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faX } from "@fortawesome/free-solid-svg-icons";

export interface UploadableFile {
  file: File;
}

export function DragAndDrop({ descriptionText, buttonText }: Props) {
  const [files, setFiles] = useState<UploadableFile[]>([]);

  const removeCurrentFile = (event: any, file: File) => {
    event.preventDefault();
    setFiles((curr) => curr.filter((allFiles) => allFiles.file !== file));
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const mappedFiles = acceptedFiles.map((file) => ({ file }));
    setFiles((curr) => [...curr, ...mappedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });

  return (
    <>
      <S.DragAndDrop
        {...getRootProps()}
        className="drag-n-drop"
        isActive={isDragActive}
      >
        <input {...getInputProps()} />
        <FontAwesomeIcon className="font-awesome-icon" icon={faCloudArrowUp} />
        <Description descriptionText={descriptionText} />
        <Button buttonText={buttonText} />
      </S.DragAndDrop>

      {files.length > 0 && (
        <S.UlSelectedFiles>
          {files.map((file, index) => (
            <li className="" key={index}>
              <button onClick={(event) => removeCurrentFile(event, file.file)}>
                <FontAwesomeIcon className="font-awesome-icon" icon={faX} />
              </button>
              {file.file.name} - {file.file.size} bytes
            </li>
          ))}
        </S.UlSelectedFiles>
      )}
    </>
  );
}
