import * as S from './styles';

import { Button, ErrorMessage, Title } from '@/design-system/components/atomic-design/01_atoms';
import { Field, DragAndDrop } from '@/design-system/components/atomic-design/02_molecules';
import { SideBySideInput } from '@/design-system/components/atomic-design/03_organisms';

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
        registerLeft={{...register("title")}}
        inputPlaceholderRight="URL"
        inputValueRight=""
        labelTextRight="Endereço"
        registerRight={{...register("url")}}
      />
      {errors.url?.message && <ErrorMessage errorMessage={errors.url?.message}/>}

      <Field
        inputPlaceholder="Ex: Desenvolvedora Front End"
        labelText="Cargo"
        register={{...register("cargo")}}
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