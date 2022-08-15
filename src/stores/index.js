import { createPinia, defineStore } from 'pinia'

// Example from: https://stackblitz.com/edit/vue3-use-pinia-store-option-api?file=src%2Fstore%2Findex.js

export const useTestPiniaStore = defineStore('testStore', {
  state: () => {
      return {
          name: 'Sune'
      }
  },
})

const store = createPinia()

export default store
