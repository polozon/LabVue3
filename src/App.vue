<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import KompA from './components/KompA.vue'
import KompB from './components/KompB.vue'
import KompC from './components/KompC.vue'
import ProgressBar from './components/ProgressBar.vue'
import RoundButton from './components/RoundButton.vue'
const name = "Peter"
</script>

<template>
  <header class="flex">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="64" height="64" />
    <div class="wrapper">
      <HelloWorld msg="LabVue3" />
    </div>
  </header>

  <main class="flex">
    <div class="text-1xl text-green-600 font-bold px-2 py-4">
      <KompA />
      <KompB var-med-camel="1+2" />
      <KompB :var-med-camel="1 + 2" />
      <KompB :var-med-camel="name" />
      <KompC />
      <KompC title="Kalle" :likes="a + b" />
      <div class="border border-yellow-300">
        <KompB v-for="item in vehicles" :var-med-camel="item" />
      </div>
      <ProgressBar :progress="b % 15" />
    </div>
    <!-- Try removing flex-wrap -->
    <div class="bg-slate-300 w-32 h-32 flex flex-wrap">
      <!-- Building the class with v-bind -->
      <div v-for="col in colors" :class="col + ' w-12 h-12'" />
    </div>
    <RoundButton color="bg-red-500" sign="-" @clicked="b--" />
    <RoundButton color="bg-blue-500" sign="+" @clicked="b++" />
    <button class="fixed top-5 left-60 w-8 h-8 bg-orange-500 rounded-full" @click="b++;">+</button>
  </main>
</template>

<script>
export default {
  data() {
    return { a: 10, b: 2, vehicles: ['Bil', 'Båt', 'Cykel'],
    colors: ['bg-red-500','bg-green-500','bg-blue-500','bg-orange-500'] 
    }
  }
}
</script>