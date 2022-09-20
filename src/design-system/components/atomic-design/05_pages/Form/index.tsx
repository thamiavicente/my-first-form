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
        inputPlaceholderLeft="Nome e sobrenome"
        inputValueLeft=""
        labelTextLeft="Nome"
        registerLeft={{...register("name")}}
        inputPlaceholderRight="URL"
        inputValueRight=""
        labelTextRight="Endereço"
        registerRight={{...register("url")}}
      />
      {errors.name?.message && <ErrorMessage errorMessage={errors.name?.message}/>}
      {errors.url?.message && <ErrorMessage errorMessage={errors.url?.message}/>}

      <Field
        inputPlaceholder="email@dominio.com"
        labelText="E-mail"
        register={{...register("email")}}
      />
      {errors.email?.message && <ErrorMessage errorMessage={errors.email?.message}/>}

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