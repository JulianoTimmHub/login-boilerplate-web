import { SnackbarMessage } from "@/components/snackbar/SnackbarMessage";
import { useAuthContext } from "@/hooks/context/useAuthContext.hook";

const Home = () => {
  const {
    signInResults: { statusSignIn, isLoading },
    userLogout,
    resetAuthStatus,
    validateToken
  } = useAuthContext();

  return (
    <div className="container">
      <div className="col-12 d-flex align-items-center justify-content-center gap-2">
        {/* <Link href={'/login'}>Ir para o Login</Link> */}
        <button
          className="btn btn-primary"
          onClick={validateToken}
        >
          Validar token
        </button>
        <button
          className="btn btn-danger"
          onClick={userLogout}
        >
          Deslogar
        </button>
        {!isLoading && statusSignIn.color === 'success' && (
          <SnackbarMessage
            status={statusSignIn}
            resetStatus={resetAuthStatus}
          />
        )}
      </div>
    </div>
  );
}

export default Home;