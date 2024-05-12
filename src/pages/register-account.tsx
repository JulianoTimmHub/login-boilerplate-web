import Image from "next/image";
import Link from "next/link";
import imgLogin from '../assets/images/img-register-user.svg';
import { Loading } from "@/components/loading/Loading";
import { SnackbarMessage } from "../components/snackbar/SnackbarMessage";
import { RegisterAccountForm } from "@/components/forms/registerAccount/RegisterAccountForm";
import { useUserContext } from "@/hooks/context/useUserContext.hook";

const RegiserAccount = ({ }) => {
  const { registerResults: { isLoading, statusRegister }, resetUserStatus } = useUserContext();

  return (
    <div className={`container ${isLoading && 'opacity-25'}`}>
      <div className="row min-vh-100">
        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
          <div className="col-8 card shadow bg-body p-4 rounded ">
            <div className="col-12 d-flex align-items-center flex-direction-end">
              <h5>Registre sua conta</h5>
            </div>
            <RegisterAccountForm />
            <div className="col-12 d-flex align-items-center justify-content-start mt-3">
              <Link className="text-primary" href={'/login'}>Voltar para o login</Link>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex align-items-end justify-content-end">
          <Image className="position-absolute" src={imgLogin} height={400} alt="Register user image" loading="lazy" />
        </div>
      </div>
      {!isLoading && statusRegister && (
        <SnackbarMessage 
          status={statusRegister}
          resetStatus={resetUserStatus}
        />
      )}
      {isLoading && (
        <Loading />
      )}
    </div>
  )
}

export default RegiserAccount;