<template>
  <Form />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Form from "./components/Form.vue"

export default defineComponent({
  name: "App",
  components: {
    Form,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0 auto;
  margin-top: 60px;
  width: 360px;
}
</style>
