import { useMutation } from "@tanstack/react-query"
import { signIn } from '../../api/auth.api';

export const useSignIn = () => {
  return useMutation({
    mutationKey: 'sign-in',
    mutationFn: signIn
  });
}