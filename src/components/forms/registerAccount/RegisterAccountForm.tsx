import { useForm } from "react-hook-form";
import { RegisterUserFormType } from "@/types/UserTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from 'yup';
import styles from '../../../styles/login.module.css';
import { useUserContext } from "@/hooks/context/useUserContext.hook";
import { useEffect } from "react";

export const RegisterAccountForm = ({ }) => {
  const { registerUser, registerResults: { statusRegister } } = useUserContext();

  const validateForm = object().shape({
    username: string().required('Informe seu nome'),
    email: string().required('Informe seu e-mail'),
    password: string().required('Informe sua senha'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegisterUserFormType>({
    resolver: yupResolver(validateForm)
  });

  useEffect(() => {
    if (statusRegister.color === 'success')
      reset();
  }, [statusRegister, reset])

  return (
    <form
      className="col-12 d-flex flex-column align-items-center justify-content-center"
      onSubmit={handleSubmit(registerUser)}
    >
      <input
        placeholder={errors.username?.message ?? "Usuário"}
        className={`form-control bg-light m-2 p-3 ${errors.username?.message && styles.inputError}`}
        type="text"
        {...register('username')}
      />
      <input
        placeholder={errors.email?.message ?? "E-mail"}
        className={`form-control bg-light m-2 p-3 ${errors.email?.message && styles.inputError}`}
        type="text"
        {...register('email')}
      />
      <input
        placeholder={errors.password?.message ?? "Senha"}
        className={`form-control bg-light m-2 p-3 ${errors.password?.message && styles.inputError}`}
        type="text"
        {...register('password')}
      />
      <button
        type="submit"
        className="form-control btn btn-primary m-2 p-2"
      >
        Registrar
      </button>
    </form>
  )
}