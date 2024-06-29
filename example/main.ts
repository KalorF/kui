import { createApp } from 'vue'
import App from './App.vue'
import Kui from '../packages/ui/index'

const app = createApp(App)
app.use(Kui)

app.mount('#app')
