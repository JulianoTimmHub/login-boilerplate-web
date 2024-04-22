import { useMutation } from "@tanstack/react-query";
import { registerUser } from '../../api/user.api';

export const useRegisterUser = () => {
  return useMutation({
    mutationKey: 'register-user',
    mutationFn: registerUser
  });
}