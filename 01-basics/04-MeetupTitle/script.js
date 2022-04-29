import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение

createApp({
  data() {
    return {
      index: 1,
      title: 'TITLE',
    }
  },

  watch: {
    'index'() {
      fetchMeetupById(this.index).then((meetup) => {
        this.title = meetup.title
      })
    }
  },
}).mount('#app')
