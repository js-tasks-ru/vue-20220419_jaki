import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

createApp({
  name: 'Calculator',

  data() {
    return {
      first: 0,
      second: 0,
      operator: "sum",
    }
  },

  computed: {
    result() {
      return this[this.operator]()
    }
  },

  methods: {
    sum() {
      return this.first + this.second
    },
    subtract() {
      return this.first - this.second
    },
    multiply() {
      return this.first * this.second
    },
    divide() {
      return this.first / this.second
    },

  },
}).mount('#app')
