import { ESnackbarMessage } from "@/components/snackbar/enum/snackbar-message.enum";
import { useRegisterUserMutation } from "@/hooks/mutation/useRegisterUserMutation.hook";
import { StatusOptionsType } from "@/types/MessageTypes";
import { RegisterUserFormType, UserContextType } from "@/types/UserTypes";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusRegister, setStatusRegister] = useState<StatusOptionsType>({ message: null, color: ''});

  const {
    mutate: mutateRegisterUser,
    isError: isErrorRegister,
    data: dataRegister,
    error: errorRegister,
    isSuccess: isSuccessRegister,
    isPending: isPendingRegister
  } = useRegisterUserMutation();

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

  const registerUser = async ({ username, email, password }: RegisterUserFormType) => {
    mutateRegisterUser({ username, email, password })
  }

  const resetUserStatus = () => {
    setStatusRegister({message: null, color: ''});
  };

  const value = {
    registerUser,
    registerResults: {
      isLoading,
      statusRegister
    },
    resetUserStatus
  };

  return (
    <UserContext.Provider value={value} >
      {children}
    </UserContext.Provider>
  )
}