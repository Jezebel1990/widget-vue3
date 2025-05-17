import axios from 'axios'

const API_ENVS = {
  production: 'https://backend-vue3-snowy.vercel.app',
  development: 'https://backend-vue3-snowy.vercel.app',
  local: 'http://localhost:3000'
}

const nodeEnv = (process.env.NODE_ENV ?? 'production') as keyof typeof API_ENVS

const httpClient = axios.create({
  baseURL: API_ENVS[nodeEnv]
})

httpClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const canThrowAnError = error.request.status === 0 ||
  error.request.status === 500

  if (canThrowAnError) {
    throw new Error(error.message)
  }
  return error
})

export default {

}
