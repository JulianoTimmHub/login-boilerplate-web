import { useAuth } from "@/contexts/AuthContext";
import { useForm } from "react-hook-form"
import { ForgotPasswordFormType } from "../../types/AuthTypes";
import styles from '../../styles/login.module.css';

import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from 'yup';

export const ForgotPasswordForm = ({ }) => {
  // const { signIn } = useAuth();

  const validateForm = object().shape({
    email: string().required('Informe seu e-mail'),
    password: string().required('Informe sua nova senha'),
    confirmPassword: string().required('Confirme sua nova senha'),
  })
  const {
    register,
    // handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordFormType>({
    resolver: yupResolver(validateForm)
  });

  return (
    <form
      className="col-12 d-flex flex-column align-items-center"
    // onSubmit={handleSubmit(signIn)}
    >
      <input
        placeholder={errors.email?.message ?? "E-mail"}
        className={`form-control bg-light m-2 p-3 ${errors.email?.message && styles.inputError}`}
        type="text"
        {...register("email")}
      />
      <input
        placeholder={errors.password?.message ?? "Nova senha"}
        className={`form-control bg-light m-2 p-3 ${errors.password?.message && styles.inputError}`}
        type="password"
        {...register("password")}
      />
      <input
        placeholder={errors.confirmPassword?.message ?? "Confirmação de nova senha"}
        className={`form-control bg-light m-2 p-3 ${errors.confirmPassword?.message && styles.inputError}`}
        type="password"
        {...register("confirmPassword")}
      />
      <button type="submit" className="form-control btn btn-primary m-2 p-2">
        Alterar Senha
      </button>
    </form>
  )
}