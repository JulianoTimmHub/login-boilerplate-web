import { useAuthContext } from "@/hooks/context/useAuthContext.hook";
import { useForm } from "react-hook-form"
import { SignInFormType } from "../../../types/AuthTypes";

import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from 'yup';
import styles from '../../../styles/login.module.css';

export const LoginForm = ({ }) => {
  const { signIn } = useAuthContext();

  const validateForm = object().shape({
    email: string().required('Informe seu e-mail'),
    password: string().required('Informe sua senha'),
  })
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormType>({
    resolver: yupResolver(validateForm)
  });

  return (
    <form
      className="col-12 d-flex flex-column align-items-center"
      onSubmit={handleSubmit(signIn)}
    >
      <input
        placeholder={errors.email?.message ?? "E-mail"}
        className={`form-control bg-light m-2 p-3 ${errors.email?.message && styles.inputError}`}
        type="text"
        {...register("email")}
      />
      <input
        placeholder={errors.password?.message ?? "Senha"}
        className={`form-control bg-light m-2 p-3 ${errors.password?.message && styles.inputError}`}
        type="password"
        {...register("password")}
      />
      <button type="submit" className="form-control btn btn-primary m-2 p-2">
        Entrar
      </button>
    </form>
  )
}