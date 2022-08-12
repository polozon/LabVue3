<template>
  <button @click="increment" class="text-2xl text-cyan-500 font-bold">
    Click me: {{ state.count }}
  </button>
  <p class="inline ml-2 text-slate-500 font-light">(Not > 10)</p>
</template>

<script setup>
// Using CompositionAPI script setup 
// https://vuejs.org/guide/essentials/reactivity-fundamentals.html#script-setup

import { reactive, watch } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}

watch(state, async (newState) => {
  if (newState.count >= 10) {
    console.log("Reached 10");
    setTimeout(() => {
    console.log("Timeout2");
        state.count = 5 + Math.floor(Math.random() * 5);
    },1000)
  }
})

// After 2s the time will be incremented one
setTimeout(() => {
    console.log("Timeout1");
    increment();
},2000)

</script>

