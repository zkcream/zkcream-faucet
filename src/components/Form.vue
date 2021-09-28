<template>
  <div id="container">
    <h1>{{ title }}</h1>
    <input class="input" v-model="to" placeholder="Enter your address" />
    <button class="btn" :disabled="!isAddress()" @click="post">
      {{ buttonTxt }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Methods from "@/api/method"
import { isAddress } from "@ethersproject/address"

export default defineComponent({
  name: "Form",
  data() {
    return {
      title: "zkcream faucet",
      buttonTxt: "Send me ETH",
      to: "",
    }
  },
  methods: {
    async post() {
      const r = await Methods.getEth(this.to)
      console.log("tx hash: ", r.data)
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
</style>
