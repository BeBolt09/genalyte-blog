import { createRouter, createWebHistory } from 'vue-router';
import Blog from '../views/blog-view/Blog.vue';
import Contact from '../views/contact-view/Contact.vue';
import Timeline from '../views/timeline-view/Timeline.vue';
import Project from '../views/project-view/Project.vue';


const routes = [
  { path: '/', component: Blog },
  { path: '/projects', component: Project },
  { path: '/timeline', component: Timeline },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
