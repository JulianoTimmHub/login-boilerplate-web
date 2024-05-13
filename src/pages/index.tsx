import { SnackbarMessage } from "@/components/snackbar/SnackbarMessage";
import { useAuthContext } from "@/hooks/context/useAuthContext.hook";
import Link from "next/link";

const Home = () => {
  const { signInResults: { statusSignIn, isLoading }, resetAuthStatus } = useAuthContext();

  return (
    <div>
      <Link href={'/login'}>Ir para o Login</Link>
      {!isLoading && statusSignIn.color === 'success' && (
        <SnackbarMessage 
          status={statusSignIn} 
          resetStatus={resetAuthStatus} 
        />
      )}
    </div>
  );
}

export default Home;