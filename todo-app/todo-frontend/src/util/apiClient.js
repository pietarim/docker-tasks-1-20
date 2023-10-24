import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL

const apiClient = axios.create({
  baseURL: `${baseURL}`,
})

export default apiClient
