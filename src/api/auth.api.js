import axios from "axios";

export const signIn = async ({
  email,
  password
}) => {
  return await axios.post('http://localhost:3001/auth/signin', {
      email,
      password
    }).then((res) => res)
    .catch((res) => res);
}