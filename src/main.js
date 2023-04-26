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

if (localStorage.getItem("english") === null) {
    var userLang = navigator.language || navigator.userLanguage
    if (userLang.includes("de")) localStorage.setItem("english", false) 
    else localStorage.setItem("english", true) 
}

registerPlugins(app)

app.mount('#app')
