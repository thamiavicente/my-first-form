import styled from 'styled-components';
import { SideBySideInput } from '../../03_organisms/SideBySideInput';
import { Field } from '../../02_molecules/Field';
import { DragAndDrop } from '../../02_molecules/DragAndDrop';
import { Button } from '../../01_atoms/Button';
import { Title } from '../../01_atoms/Title';

export function Form() {
  const Form = styled.div `
    @media (min-width: 1024px) {
      width: 80%;
      max-width: 768px;
    }

    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;

    .button {
      @media (min-width: 1024px) {
        width: 24%;
        align-self: flex-end;
      }
      
      width: 100%;
    }
   `

  return (
    <Form className="form">
      <Title
        titleText="Formulário"
      />
      <SideBySideInput
        inputPlaceholderLeft="Nome do Projeto"
        inputValueLeft=""
        labelTextLeft="Título"
        inputPlaceholderRight="URL"
        inputValueRight=""
        labelTextRight="Endereço"
      />

      <Field
        inputPlaceholder="Ex: Desenvolvedora Front End"
        inputValue=""
        labelText="Cargo"
      />

      <DragAndDrop
        descriptionText="Arraste seu arquivo para cá"
        buttonText="Upload de arquivo"
      />
      
      <Button
        buttonText="Salvar e continuar"
      />
    </Form>
  )
}