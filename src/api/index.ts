import axios, { AxiosInstance } from "axios"

const endpoint = process.env.VUE_APP_ZKCREAM_API_ENDPOINT

export default (): AxiosInstance => {
  return axios.create({
    baseURL: endpoint,
  })
}
