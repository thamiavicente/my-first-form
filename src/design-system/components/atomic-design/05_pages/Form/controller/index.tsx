import { useForm } from 'react-hook-form';
import { Props } from './types';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object({
  cargo: yup.string().test('is-test', 'Não é um nome válido', (value) => {
    if(value?.length >= 3) return true;
    return false;
  }).required('Campo obrigatório'),
  title: yup.string().required('Campo obrigatório'),
  address: yup.string().required('Campo obrigatório'),
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