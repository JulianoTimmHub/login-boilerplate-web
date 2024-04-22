import axios from "axios"

export const registerUser = async ({
  username,
  email,
  password
}) => {
  return await axios.post('http://localhost:3001/user', {
      username,
      email,
      password
    }).then((res) => res)
    .catch((res) => res);
}