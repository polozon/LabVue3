<template>
  <button @click="increment" class="text-2xl text-cyan-500 font-bold">
    Click me: {{ state.count }}
  </button>
</template>

<script setup>
// Using CompositionAPI script setup 
// https://vuejs.org/guide/essentials/reactivity-fundamentals.html#script-setup

import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}

// After 2s the time will be incremented one
setTimeout(() => {
    console.log("Timeout");
    increment();
},2000)

</script>

