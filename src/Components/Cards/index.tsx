import { Container, ImageContainer, InfoContainer} from './styles';

import { FaTrash } from 'react-icons/fa'

interface CardProps {
  file: File
  handleRemoveImage: (fileName: string) => void,
}

export function Card({ file, handleRemoveImage }: CardProps) {
  return (
    <Container>
      <div  className={ImageContainer({ css: {backgroundImage: `url('${URL.createObjectURL(file)}')`} })}  />

      <InfoContainer>
        <div>
          <h2>{file.name}</h2>

          <p>{file.size / 1000}mb</p>
        </div>

        <button onClick={() => handleRemoveImage(file.name)} ><FaTrash  /></button>
      </InfoContainer>
    </Container>
  );
}
