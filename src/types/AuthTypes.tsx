export type AuthContextType = {
  registerUser: (data: RegisterUserFormType) => Promise<void>;
  signIn: (data: SignInFormType) => Promise<void>;
  registerResults: RegisterResultType;
  signInResults: SignInResultType
}

export type SignInFormType = {
  email: string;
  password: string;
}

export type RegisterUserFormType = {
  username: string;
  email: string;
  password: string;
}

export type ForgotPasswordFormType = {
  email: string;
  password: string;
  confirmPassword: string;
}

export type RegisterResultType = {
  isLoading: boolean;
  statusRegister: StatusOptionsType;
}

export type SignInResultType = {
  isLoading: boolean;
  statusSignIn: StatusOptionsType
}

export type StatusOptionsType = {
  message: string | null;
  color: string | null;
}