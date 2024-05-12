import { createContext, useEffect, useState } from "react";
import { AuthContextType, SignInFormType, RecoverPasswordFormType } from "@/types/AuthTypes";
import { StatusOptionsType } from "@/types/MessageTypes";
import { useRecoverPasswordMutation } from '../hooks/mutation/useRecoverPasswordMutation.hook';
import { useSignInMutation } from '../hooks/mutation/useSignInMutation.hook';
import { ESnackbarMessage } from "@/components/snackbar/enum/snackbar-message.enum";

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusSignIn, setStatusSignIn] = useState<StatusOptionsType>({ message: null, color: ''});
  const [statusRecoverPassword, setStatusRecoverPassword] = useState<StatusOptionsType>({ message: null, color: ''});

  const {
    mutate: mutateSignIn,
    isError: isErrorSignIn,
    data: dataSignIn,
    error: errorSignIn,
    isSuccess: isSuccessSignIn,
    isPending: isPendingSignIn
  } = useSignInMutation();

  const { 
    mutate: mutateRecoverPassword,
    isError: isErrorRecoverPassword,
    data: dataRecoverPassword,
    error: errorRecoverPassword,
    isSuccess: isSuccessRecoverPassword,
    isPending: isPendingRecoverPassword
  } = useRecoverPasswordMutation();

  useEffect(() => {
    if (isPendingSignIn) {
      setIsLoading(true);
    }

    if (isSuccessSignIn && dataSignIn) {
      if (dataSignIn?.response?.status === 404) {
        setStatusSignIn({message: ESnackbarMessage.SIGN_IN.NOT_FOUND, color: 'error'});
      } else if (dataSignIn?.response?.status === 401) {
        setStatusSignIn({message: ESnackbarMessage.SIGN_IN.ERROR, color: 'error'});
      } else {
        setStatusSignIn({message: ESnackbarMessage.SIGN_IN.SUCCESS, color: 'success'});
      }
      setIsLoading(false);
    }

    if (isErrorSignIn || errorSignIn) {
      setIsLoading(false);
      setStatusSignIn({message: ESnackbarMessage.SIGN_IN.NOT_FOUND, color: 'error'});
    }
  }, [
    isErrorSignIn,
    dataSignIn,
    errorSignIn,
    isSuccessSignIn,
    isPendingSignIn,
    setIsLoading,
    setStatusSignIn
  ]);


  useEffect(() => {
    if (isPendingRecoverPassword) {
      setIsLoading(true);
    }

    if (isSuccessRecoverPassword && dataRecoverPassword) {
      if (dataRecoverPassword?.response?.status === 404) {
        setStatusRecoverPassword({message: ESnackbarMessage.RECOVER_PASSWORD.NOT_FOUND, color: 'error'});
      } else if (dataRecoverPassword?.response?.status === 401) {
        setStatusRecoverPassword({message: ESnackbarMessage.RECOVER_PASSWORD.ERROR, color: 'error'});
      } else {
        setStatusRecoverPassword({message: ESnackbarMessage.RECOVER_PASSWORD.SUCCESS, color: 'success'});
      }
      setIsLoading(false);
    }

    if (isErrorRecoverPassword || errorRecoverPassword) {
      setIsLoading(false);
      setStatusRecoverPassword({message: ESnackbarMessage.RECOVER_PASSWORD.NOT_FOUND, color: 'error'});
    }
  }, [
    isErrorRecoverPassword,
    dataRecoverPassword,
    errorRecoverPassword,
    isSuccessRecoverPassword,
    isPendingRecoverPassword,
    setIsLoading,
    setStatusRecoverPassword
  ]);

  const signIn = async ({ 
    email, password 
  }: SignInFormType): Promise<void> => {
    mutateSignIn({ email, password });
  }

  const recoverPassword = async ({
    email, newPassword, confirmNewPassword
  }: RecoverPasswordFormType): Promise<void> => {
    if (newPassword !== confirmNewPassword) {
      setStatusRecoverPassword({message: ESnackbarMessage.RECOVER_PASSWORD.PASSWORDS_NOT_EQUALS, color: 'error'});
    } else {
      mutateRecoverPassword({email, newPassword, confirmNewPassword});
    }
  }

  const resetAuthStatus = (): void => {
    setStatusRecoverPassword({message: null, color: ''});
    setStatusSignIn({message: null, color: ''});
  };

  const value = {
    signIn,
    recoverPassword,
    signInResults: {
      isLoading,
      statusSignIn
    },
    recoverPasswordResults: {
      isLoading,
      statusRecoverPassword
    },
    resetAuthStatus
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}