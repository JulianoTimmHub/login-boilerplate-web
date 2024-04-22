import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import imgLogin from '../assets/images/img-register-user.svg';
import { Loading } from "@/components/loading/Loading";
import { SnackbarMessage } from "../components/snackbar/SnackbarMessage";
import Link from "next/link";
import { RegisterAccountForm } from "@/components/registerAccount/RegisterAccountForm";

const RegiserAccount = ({ }) => {
  const { registerResults: { isLoading, statusRegister } } = useAuth();

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
        <SnackbarMessage status={statusRegister} />
      )}
      {isLoading && (
        <Loading />
      )}
    </div>
  )
}

export default RegiserAccount;