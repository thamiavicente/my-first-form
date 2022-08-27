import { useForm } from 'react-hook-form';
import { Props } from './types';

export function useController() {
  const {register, handleSubmit, formState:{errors}} = useForm<Props>()

  return {
    register,
    handleSubmit,
    errors
  }
}