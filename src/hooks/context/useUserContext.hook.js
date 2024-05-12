import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export const useUserContext = () => {
  const { 
    registerUser,
    registerResults,
    resetUserStatus
  } = useContext(UserContext);

  return {
    registerUser,
    registerResults,
    resetUserStatus
  };
}