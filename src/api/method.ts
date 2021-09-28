import Api from './index'

export default {
  getEth(to: string) {
    return Api().post('/faucet', { to })
  }
}