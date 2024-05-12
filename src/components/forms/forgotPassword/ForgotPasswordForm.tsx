import { useAuthContext } from "@/hooks/context/useAuthContext.hook";
import { useForm } from "react-hook-form"
import { RecoverPasswordFormType } from "../../../types/AuthTypes";

import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from 'yup';
import styles from '../../../styles/login.module.css';

export const ForgotPasswordForm = ({ }) => {
  const { recoverPassword } = useAuthContext();

  const validateForm = object().shape({
    email: string().required('Informe seu e-mail'),
    newPassword: string().required('Informe sua nova senha'),
    confirmNewPassword: string().required('Confirme sua nova senha'),
  })
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RecoverPasswordFormType>({
    resolver: yupResolver(validateForm)
  });

  return (
    <form
      className="col-12 d-flex flex-column align-items-center"
      onSubmit={handleSubmit(recoverPassword)}
    >
      <input
        placeholder={errors.email?.message ?? "E-mail"}
        className={`form-control bg-light m-2 p-3 ${errors.email?.message && styles.inputError}`}
        type="text"
        {...register("email")}
      />
      <input
        placeholder={errors.newPassword?.message ?? "Nova senha"}
        className={`form-control bg-light m-2 p-3 ${errors.newPassword?.message && styles.inputError}`}
        type="password"
        {...register("newPassword")}
      />
      <input
        placeholder={errors.confirmNewPassword?.message ?? "Confirmação de nova senha"}
        className={`form-control bg-light m-2 p-3 ${errors.confirmNewPassword?.message && styles.inputError}`}
        type="password"
        {...register("confirmNewPassword")}
      />
      <button type="submit" className="form-control btn btn-primary m-2 p-2">
        Alterar Senha
      </button>
    </form>
  )
}