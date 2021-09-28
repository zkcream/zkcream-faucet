import { AxiosResponse } from "axios"
import Api from "./index"

export default {
  getEth(to: string): Promise<AxiosResponse<string>> {
    return Api().post("/faucet", { to })
  },
}
