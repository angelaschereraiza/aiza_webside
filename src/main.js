/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

// Gets page language from local storage or browser setting
if (localStorage.getItem("english") === null) {
  var userLang = navigator.language || navigator.userLanguage
  if (userLang.includes("de")) {
    localStorage.setItem("english", false) 
    document.documentElement.setAttribute('lang', 'de')
  }
  else {
    localStorage.setItem("english", true)
    document.documentElement.setAttribute('lang', 'en')
  }
}

registerPlugins(app)

app.mount('#app')
