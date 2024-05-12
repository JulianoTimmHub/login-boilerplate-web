import { StatusOptionsType } from "./MessageTypes";

export type UserContextType = {
  registerUser: (data: RegisterUserFormType) => Promise<void>;
  registerResults: RegisterResultType;
  resetUserStatus: () => void;
} 

export type RegisterUserFormType = {
  username: string;
  email: string;
  password: string;
}

export type RegisterResultType = {
  isLoading: boolean;
  statusRegister: StatusOptionsType;
}