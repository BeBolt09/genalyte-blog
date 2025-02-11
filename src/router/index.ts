import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Blog },
  { path: '/blog', component: Blog },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
