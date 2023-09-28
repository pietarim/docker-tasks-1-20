import axios from 'axios'

/* const baseURL = process.env.REACT_APP_API_URL */
const baseURL = 'http://localhost:8080/4000/todos'
console.log('alla on baseURL')
console.log(baseURL)

const apiClient = axios.create({
  baseURL: `${baseURL}`,
})

export default apiClient
