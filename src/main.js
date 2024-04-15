import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import HomePage from './components/HomePage.vue'
import ChefStock from './components/ChefStock.vue'
import Plans from "@/components/Plans.vue";
import AboutUs from "@/components/AboutUs.vue";
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


const routes = [
    { path: '/', component: HomePage },
    { path: '/homepage', component: HomePage },
    { path: '/chefstock', component: ChefStock },
    { path: '/plans', component: Plans },
    { path: '/aboutus', component: AboutUs }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(PrimeVue);

createApp(App).use(router).mount('#app')

