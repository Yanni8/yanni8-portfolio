import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css' 

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

const app = createApp(App)


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },  
  theme: {
    defaultTheme: 'dark'
  },
})

app.use(vuetify)
app.use(router)

app.mount('#app')
