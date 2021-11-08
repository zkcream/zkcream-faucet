<template>
  <div id="container">
    <h1>{{ title }}</h1>
    <input class="input" v-model="to" placeholder="Enter your address" />
    <button class="btn" :disabled="!isAddress()" @click="post">
      {{ buttonTxt }}
    </button>
    <transition name="fade" class="txhash">
      <p v-if="hash.length > 0">Tx: {{ hash }}</p>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Methods from "@/api/method"
import { isAddress } from "@ethersproject/address"
import { AxiosResponse } from "axios"

export default defineComponent({
  name: "Form",
  data() {
    return {
      title: "zkcream faucet",
      buttonTxt: "Send me ETH",
      to: "",
      hash: "",
    }
  },
  methods: {
    async post() {
      await Methods.getEth(this.to).then((r: AxiosResponse<string>) => {
        this.hash = r.data
        setInterval(() => {
          this.hash = ""
        }, 5000)
      })
      this.to = ""
    },
    isAddress() {
      return isAddress(this.to)
    },
  },
})
</script>

<style>
#container {
  display: grid;
}

.input {
  width: 93%;
  font-size: 1rem;
  padding: 12px;
  border: 1px solid;
  border-radius: 0.25rem;
  line-height: 1rem;
  margin-bottom: 1rem;
}

.btn {
  font-size: 1rem;
  font-weight: 500;
  background-color: #fecc01;
  padding: 16px;
  text-align: center;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.btn:disabled {
  background-color: #ffefb1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.txhash {
  font-size: 0.6rem;
}
</style>
