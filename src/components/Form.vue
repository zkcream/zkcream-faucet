<template>
  <div>
    <h1>{{ title }}</h1>
    <input class="input" v-model="to" placeholder="Enter your address"/>
    <button :disabled="!isAddress()" @click="post">{{ buttonTxt }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Methods from '@/api/method';
import { isAddress } from "@ethersproject/address";

export default defineComponent({
  name: "Form",
  data() {
    return {
      title: "zkcream faucet",
      buttonTxt: "Send me ETH",
      to: ''
    };
  },
  methods: {
    async post() {
      const r = await Methods.getEth(this.to)
      console.log(r.data)
      console.log(this.to)
    },
    isAddress() {
      return isAddress(this.to)
    }
  },
});
</script>
