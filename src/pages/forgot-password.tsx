import Image from "next/image";
import Link from "next/link";
import imgForgotPassword from '../assets/images/img-forgot-password.svg';
import { useAuthContext } from "@/hooks/context/useAuthContext.hook";
import { SnackbarMessage } from "@/components/snackbar/SnackbarMessage";
import { Loading } from "@/components/loading/Loading";
import { ForgotPasswordForm } from "@/components/forms/forgotPassword/ForgotPasswordForm";

const ForgotPassword = ({ }) => {
  const { recoverPasswordResults: { isLoading, statusRecoverPassword }, resetAuthStatus } = useAuthContext();

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <div className="col-4 card p-4 shadow bg-body rounded">
            <div className="col-12 d-flex flex-direction-end">
              <h5>Redefinir senha</h5>
            </div>
            <ForgotPasswordForm />
            <div className="col-12 d-flex flex-direcion-end mt-3">
              <Link className="text-primary" href={'/login'}>Voltar para o login</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <Image className="position-absolute bottom-0 end-0" src={imgForgotPassword} height={400} alt="Login image" loading="lazy" />
      </div>
      {!isLoading && statusRecoverPassword && (
        <SnackbarMessage 
          status={statusRecoverPassword} 
          resetStatus={resetAuthStatus} 
        />
      )}
      {isLoading && (
        <Loading />
      )}
    </div>
  )
}

export default ForgotPassword;