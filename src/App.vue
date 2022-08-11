<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import KompA from './components/KompA.vue'
import KompB from './components/KompB.vue'
import KompC from './components/KompC.vue'
const name = "Peter"
</script>

<template>
  <header class="flex">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="64" height="64" />
    <div class="wrapper">
      <HelloWorld msg="LabVue3" />
    </div>
  </header>

  <main>
    <div class="text-1xl text-green-600 font-bold px-2 py-4">
      
    <KompA />
    <KompB var-med-camel="1+2"/>
    <KompB :var-med-camel="1+2"/>
    <KompB :var-med-camel="name"/>
    <KompC />
    <KompC title="Kalle" :likes="10+3" />
    </div>
  </main>
</template>
