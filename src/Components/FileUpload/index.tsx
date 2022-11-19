import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Container } from './styles'

interface FileUploadProps {
  handleAddNewImages: (newImages: File[]) => void;
}

export function FileUpload({ handleAddNewImages }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: any) => {
    handleAddNewImages(acceptedFiles)
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      
      <Container>
        Arraste seus arquivos aqui
      </Container>
      
    </div>
  )
}