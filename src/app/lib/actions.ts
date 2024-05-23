import axios from 'axios';

export async function login(
  prevState: string | undefined,
  formData: FormData,
)  {
  try {
    const response = await axios.post('http:localhost:3000/users/login')

    if (response) {
      const refreshToken = response.data.refreshToken;
      const accessToken = response.data.accessToken;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

    }
    return 'hi'
  } catch (error) {

    throw error;
  }
}
