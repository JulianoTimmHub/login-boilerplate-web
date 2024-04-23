import Image from "next/image";
import imgForgotPassword from '../assets/images/img-forgot-password.svg';
import { useAuth } from "@/contexts/AuthContext";
import { SnackbarMessage } from "@/components/snackbar/SnackbarMessage";
import { Loading } from "@/components/loading/Loading";
import Link from "next/link";
import { ForgotPasswordForm } from "@/components/forgotPassword/ForgotPasswordForm";

const ForgotPassword = ({ }) => {
  const { signInResults: { isLoading, statusSignIn } } = useAuth();

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <h2 className="mb-5">
            Olá, que bom ver você de novo
          </h2>
          <div className="col-6 card p-4 shadow bg-body rounded">
            <div className="col-12 d-flex align-items-center justify-content-center mb-4">
              <p>Não tem uma conta?
                <Link className="text-primary" href={'register-account'}> Registre-se</Link>
              </p>
            </div>
            <div className="col-12 d-flex flex-direction-end">
              <h5>Realize o login</h5>
            </div>
            <ForgotPasswordForm />
            <div className="col-12 d-flex flex-direcion-end mt-3">
              <Link className="text-primary" href={'/forgot-password'}>Esqueceu sua senha?</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <Image className="position-absolute bottom-0 end-0" src={imgForgotPassword} height={400} alt="Login image" loading="lazy" />
      </div>
      {!isLoading && statusSignIn && (
        <SnackbarMessage status={statusSignIn} />
      )}
      {isLoading && (
        <Loading />
      )}
    </div>
  )
}

export default ForgotPassword;