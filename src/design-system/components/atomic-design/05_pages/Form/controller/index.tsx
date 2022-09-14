import { useForm } from 'react-hook-form';
import { Props } from './types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { isUrl, isEmail } from '@/helpers';

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório')
  .test('is-test', 'Insira um e-mail válido', (value) => {
    return isEmail(value as string);
  }),
  url: yup.string().required('Campo obrigatório')
  .test('is-url', 'Insira uma url válida', (value) => {
    return isUrl(value as string);
  }),
})

export function useController() {
  const {register, handleSubmit, formState:{errors}} = useForm<Props>({
    resolver: yupResolver(schema),
  })

  return {
    register,
    handleSubmit,
    errors
  }
}