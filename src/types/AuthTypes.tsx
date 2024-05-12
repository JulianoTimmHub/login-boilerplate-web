import { StatusOptionsType } from "./MessageTypes";

export type AuthContextType = {
  signIn: (data: SignInFormType) => Promise<void>;
  recoverPassword: (data: RecoverPasswordFormType) => Promise<void>;
  signInResults: SignInResultType;
  recoverPasswordResults: RecoverPasswordResultType;
  resetAuthStatus: () => void;
}

export type SignInFormType = {
  email: string;
  password: string;
}

export type RecoverPasswordFormType = {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
}

export type RecoverPasswordResultType = {
  isLoading: boolean;
  statusRecoverPassword: StatusOptionsType;
}

export type SignInResultType = {
  isLoading: boolean;
  statusSignIn: StatusOptionsType
}