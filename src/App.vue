<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import KompA from './components/KompA.vue'
import KompB from './components/KompB.vue'
import KompC from './components/KompC.vue'
import ProgressBar from './components/ProgressBar.vue'
import RoundButton from './components/RoundButton.vue'
import InfoBox from './components/InfoBox.vue'
import TimerToggle from './components/TimerToggle.vue'
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import { mapState } from 'pinia'
import { useTestPiniaStore } from './stores'
const enabled = ref(false)
const myname = "Peter"
</script>

<template>
  <header class="flex">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="64" height="64" />
    <div class="wrapper">
      <HelloWorld msg="LabVue3" />
    </div>
  </header>
  <div>
    <InfoBox title="Popup rubriken är här!" :is-open="openPop" @close="openPop=false">Det verkar fungera :-)</InfoBox>
    <div class="">
      <RoundButton color="bg-green-400" sign="-" @clicked="b--" />
      <RoundButton color="bg-orange-400" sign="+" @clicked="b++" />
      <RoundButton color="bg-blue-400" sign="O" @clicked="openPop=true" />
      <Switch v-model="enabled" :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
        class="relative inline-flex h-6 w-11 items-center rounded-full">
        <span class="sr-only">Enable notifications</span>
        <span :class="enabled ? 'translate-x-6' : 'translate-x-1'"
          class="inline-block h-4 w-4 transform rounded-full bg-white" />
      </Switch>
      <div class="inline p-1">
        <button @click="show = !show" class="underline italic">Hello</button>
        <Transition>
          <p class="inline" v-if="show"> World</p>
        </Transition>
      </div>
    </div>
  </div>
  <main class="flex">
    <div class="text-1xl text-green-600 font-bold px-2 py-4">
      <KompA />
      <KompB var-med-camel="1+2" />
      <KompB :var-med-camel="1 + 2" />
      <KompB :var-med-camel="myname" />
      <KompC />
      <KompC title="Counter" :value="b + 0" />
      <div class="border border-yellow-300">
        <KompB v-for="item in vehicles" :var-med-camel="item" />
      </div>
      <ProgressBar v-if="enabled" :progress="b % 15" />
      {{ name }}
    </div>
    <!-- Try removing flex-wrap      "-->
    <div>
      <div class="bg-slate-300 anim m-4 w-32 h-32 rot flex" :class="[enabled ? 'animate-spin' : '-rotate-12',{ 'flex-wrap': !everyThird }]" >
        <!-- Building the class with v-bind -->
        <div v-for="col in colors" :class="col + ' w-12 h-12'" />
      </div>

      <p>
        Skriv in en fråga:
        <input class="border border-black" v-model="question" />
      </p>
      <p>Svar: {{ answer }}</p>

      <TimerToggle />

    </div>
    <!-- <button class="fixed top-5 left-60 w-8 h-8 bg-orange-500 rounded-full" @click="b++;">+</button> -->
  </main>
</template>

<script>
export default {
  data() {
    return { a: 10, b: 2, vehicles: ['Bil', 'Båt', 'Cykel'],
    colors: ['bg-red-500','bg-green-500','bg-blue-500','bg-orange-500'], 
    openPop: false, show: false, showA: true,
    question: '',
    answer: 'Questions usually contain a question mark. ;-)' 
    }
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    }
  },
  computed: {
    everyThird() {
      return (this.b % 3) == 0;
    },
    ...mapState(useTestPiniaStore, ['name']),
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    }
  }
}
</script>