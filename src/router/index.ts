import { createRouter, createWebHistory } from 'vue-router';
import Blog from '../views/blog-view/Blog.vue';

const routes = [
  { path: '/', component: Blog },
  { path: '/projects', component: Blog },
  { path: '/timeline', component: Blog },
  { path: '/contact', component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
