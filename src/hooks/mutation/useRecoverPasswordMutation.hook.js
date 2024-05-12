import { useMutation } from "@tanstack/react-query"
import { recoverPassword } from '../../api/auth.api';

export const useRecoverPasswordMutation = () => {
  return useMutation({
    mutationKey: 'recover-password',
    mutationFn: recoverPassword
  });
}