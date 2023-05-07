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
var userLang = navigator.language || navigator.userLanguage
if (localStorage.getItem("english") === null) {
  if (userLang.includes("de")) {
    localStorage.setItem("english", false) 
  }
  else {
    localStorage.setItem("english", true)
  }
}

if (userLang.includes("de")) {
  document.documentElement.setAttribute('lang', 'de')
}
else {
  document.documentElement.setAttribute('lang', 'en')
}

registerPlugins(app)

app.mount('#app')
