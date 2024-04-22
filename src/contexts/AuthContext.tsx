import { AuthContextType, SignInFormType, RegisterUserFormType, StatusOptionsType } from "@/types/AuthTypes";
import { createContext, useContext, useEffect, useState } from "react";
import { useRegisterUser } from '../hooks/mutation/useRegisterUser.mutation';
import { useSignIn } from '../hooks/mutation/useSignIn.mutation';
import { ESnackbarMessage } from "@/components/snackbar/enum/snackbar-message.enum";

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusRegister, setStatusRegister] = useState<StatusOptionsType>({ message: null, color: 'success'});
  const [statusSignIn, setStatusSignIn] = useState<StatusOptionsType>({ message: null, color: 'success'});

  const {
    mutate: mutateRegisterUser,
    isError: isErrorRegister,
    data: dataRegister,
    error: errorRegister,
    isSuccess: isSuccessRegister,
    isPending: isPendingRegister
  } = useRegisterUser();

  const {
    mutate: mutateSignIn,
    isError: isErrorSignIn,
    data: dataSignIn,
    error: errorSignIn,
    isSuccess: isSuccessSignIn,
    isPending: isPendingSignIn
  } = useSignIn();

  useEffect(() => {
    if (isPendingRegister) {
      setIsLoading(true);
    }

    if (isSuccessRegister && dataRegister) {
      if (dataRegister?.response?.status === 409) {
        setStatusRegister({message: ESnackbarMessage.REGISTER_USER.ALREADY_REGISTER, color: 'error'});
      } else {
        setStatusRegister({message: ESnackbarMessage.REGISTER_USER.SUCCESS, color: 'success'});
      }
      setIsLoading(false);
    }

    if (isErrorRegister || errorRegister) {
      setIsLoading(false);
      setStatusRegister({message: ESnackbarMessage.REGISTER_USER.ERROR, color: 'error'});
    }
  }, [
    isErrorRegister,
    dataRegister,
    errorRegister,
    isSuccessRegister,
    isPendingRegister,
    setIsLoading,
    setStatusRegister
  ]);

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

  const registerUser = async ({ username, email, password }: RegisterUserFormType) => {
    mutateRegisterUser({ username, email, password })
  }

  const signIn = async ({ email, password }: SignInFormType) => {
    mutateSignIn({ email, password });
  }

  const value = {
    signIn,
    registerUser,
    registerResults: {
      isLoading,
      statusRegister
    },
    signInResults: {
      isLoading,
      statusSignIn
    }
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const {
    signIn,
    registerUser,
    registerResults,
    signInResults
  } = useContext(AuthContext);

  return {
    signIn,
    registerUser,
    registerResults,
    signInResults
  }
}