import { useRouter } from 'next/router'
import Link from "next/link";
import Image from "next/image";
import imgLogin from '../assets/images/img-login.svg';
import { useAuthContext } from "@/hooks/context/useAuthContext.hook";
import { LoginForm } from "@/components/forms/login/LoginForm";
import { SnackbarMessage } from "@/components/snackbar/SnackbarMessage";
import { Loading } from "@/components/loading/Loading";
import { useEffect } from 'react';

const Login = () => {
  const {
    signInResults: {
      isLoading,
      statusSignIn
    },
    logoutResults: {
      statusLogout
    },
    resetAuthStatus,
  } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (!isLoading && statusSignIn.color === 'success')
      router.push('/');
  }, [isLoading, statusSignIn, router]);

  const renderSnackbarMessage = () => {
    if (isLoading) return null;

    if (statusSignIn && statusSignIn.color) {
      return (
        <SnackbarMessage
          status={statusSignIn}
          resetStatus={resetAuthStatus}
        />
      );
    }

    if (statusLogout && statusLogout.color) {
      return (
        <SnackbarMessage
          status={statusLogout}
          resetStatus={resetAuthStatus}
        />
      );
    }

    return <></>;
  };

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col-6 d-flex align-items-end justify-content-center">
          <Image className="position-absolute" src={imgLogin} height={400} alt="Login image" loading="lazy" />
        </div>
        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
          <h2 className="mb-5">
            Olá, que bom ver você de novo
          </h2>
          <div className="col-8 card p-4 shadow bg-body rounded">
            <div className="col-12 d-flex align-items-center justify-content-center mb-4">
              <p>Não tem uma conta?
                <Link className="text-primary" href={'register-account'}> Registre-se</Link>
              </p>
            </div>
            <div className="col-12 d-flex flex-direction-end">
              <h5>Realize o login</h5>
            </div>
            <LoginForm />
            <div className="col-12 d-flex flex-direcion-end mt-3">
              <Link className="text-primary" href={'/forgot-password'}>Esqueceu sua senha?</Link>
            </div>
          </div>
        </div>
      </div>
      {renderSnackbarMessage()}
      {isLoading && (
        <Loading />
      )}
    </div>
  )
}

export default Login;