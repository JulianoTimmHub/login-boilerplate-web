import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const useAuthContext = () => {
  const {
    signIn,
    userLogout,
    recoverPassword,
    logoutResults,
    signInResults,
    recoverPasswordResults,
    resetAuthStatus,
    validateToken,
    statusValidateToken
  } = useContext(AuthContext);

  return {
    signIn,
    userLogout,
    recoverPassword,
    logoutResults,
    signInResults,
    recoverPasswordResults,
    resetAuthStatus,
    validateToken,
    statusValidateToken
  }
}