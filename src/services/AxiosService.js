import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const bcwApi = Axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/gifts",
  timeout: 12000,
  // params: {
  //   api_key: 'CJ1aCD96dqe1t0eOJjwcSySauUSUrco4'
  // }
})
