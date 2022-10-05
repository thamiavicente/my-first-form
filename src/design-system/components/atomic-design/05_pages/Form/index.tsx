import * as S from "./styles";

import {Button, ErrorMessage, Title} from "@/design-system/components/atomic-design/01_atoms";
import {Field, DragAndDrop} from "@/design-system/components/atomic-design/02_molecules";
import { useController } from "./controller";
export function Form() {
  const { register, handleSubmit, errors } = useController();
  return (
    <S.Form
      className="form"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <Title titleText="Formulário" />

      <Field
        inputPlaceholder="Nome e sobrenome"
        labelText="Nome"
        register={{ ...register("name") }}
        hasErrors={errors.name && {hasErrors: true, errorMessage: errors.name?.message}}
        />

      <Field
        inputPlaceholder="URL"
        inputValue=""
        labelText="Endereço"
        register={{ ...register("url") }}
        hasErrors={errors.url && {hasErrors: true, errorMessage: errors.url?.message}}
        />

      <Field
        inputPlaceholder="email@dominio.com"
        labelText="E-mail"
        register={{ ...register("email") }}
        hasErrors={errors.email && {hasErrors: true, errorMessage: errors.email?.message}}
        />

      <DragAndDrop
        descriptionText="Arraste seu arquivo para cá"
        buttonText="Upload de arquivo"
      />

      <Button buttonText="Salvar e continuar" type="submit" />
    </S.Form>
  );
}
