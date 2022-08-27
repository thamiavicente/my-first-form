import * as S from './styles';

import { Button } from '../../01_atoms/Button';
import { Title } from '../../01_atoms/Title';
import { Field } from '../../02_molecules/Field';
import { DragAndDrop } from '../../02_molecules/DragAndDrop';
import { SideBySideInput } from '../../03_organisms/SideBySideInput';

import { useController } from './controller';

export function Form() {

  const {register, handleSubmit, errors} = useController()

  return (
    <S.Form
      className="form"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
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
        labelText="Cargo"
        {...register("cargo")}
      />

      <DragAndDrop
        descriptionText="Arraste seu arquivo para cá"
        buttonText="Upload de arquivo"
      />
      
      <Button
        buttonText="Salvar e continuar"
        type="submit"
      />
    </S.Form>
  )
}