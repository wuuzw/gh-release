import '@primer/css/dist/primer.css';
import {createApp} from 'vue';
import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');
