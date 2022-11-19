import { Card } from '~/Components/Cards';
import { FileUpload } from '~/Components/FileUpload';

import { useState, useEffect, useCallback } from 'react'

import { Container, DropContainer, CardsContainer } from './styles';

export function Home() {

  const [images, setImages] = useState<File[]>([])

  const handleAddNewImages = useCallback((newImages: File[]) => {
    setImages(state => {
      return [
        ...state,
        ...newImages
      ]
    })
  }, [])

  const handleRemoveImage = useCallback((imageName: string) => {
    let img: File[] = []

    images.forEach(image => {
      if (image.name !== imageName) img.push(image)
    });

    console.log(img)

    // setImages([ ...newImages ])
  }, [])

  return (
    <Container>
      <DropContainer>
        <FileUpload handleAddNewImages={handleAddNewImages} />
      </DropContainer>
      <CardsContainer>
        {images.map(image => (
          <Card key={image.name} handleRemoveImage={handleRemoveImage} file={image} />
        ))}
      </CardsContainer>
    </Container>
  );
}
