<template>
  <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
    <h1 class="text-3xl font-bold text-center mb-6">Genalyte Blog</h1>
    <div v-for="post in posts" :key="post.id" class="mb-6 border-b pb-4">
      <h2 class="text-2xl font-semibold text-gray-800">{{ post.title }}</h2>
      <p class="text-gray-600 text-sm mb-2">{{ post.date }}</p>
      <p class="text-gray-700 leading-relaxed">{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogSection',
  data() {
    return {
      posts: [
        { id: 1, title: 'First Week at Genalyte', date: 'Feb 10, 2025', content: 'Got introduced to the cloud web app and started setting up my local environment.' },
        { id: 2, title: 'Learning Vue.js', date: 'Feb 15, 2025', content: 'Diving into Vue and understanding components, state management, and reactivity.' },
        { id: 3, title: 'Solving API Integration Issues', date: 'Feb 20, 2025', content: 'Faced issues with API calls and CORS errors, but managed to resolve them using proper headers and debugging tools.' }
      ]
    };
  }
};
</script>

<style scoped>
/* Optional scoped styling */
</style>
