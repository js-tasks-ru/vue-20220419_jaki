import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

createApp({
  data() {
    return {
      count: 0,
    }
  },

  methods: {
    handlerClick() {
      return this.count++;
    }
  }
}).mount('#app')
