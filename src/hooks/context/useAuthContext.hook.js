import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const useAuthContext = () => {
  const {
    signIn,
    recoverPassword,
    signInResults,
    recoverPasswordResults,
    resetAuthStatus
  } = useContext(AuthContext);

  return {
    signIn,
    recoverPassword,
    signInResults,
    recoverPasswordResults,
    resetAuthStatus
  }
}