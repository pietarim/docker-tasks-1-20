import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_URL

const apiClient = axios.create({
  baseURL: `${baseURL}`,
})

export default apiClient
