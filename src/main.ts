import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './style.css'; // Make sure this line exists!

createApp(App).use(router).mount('#app');
