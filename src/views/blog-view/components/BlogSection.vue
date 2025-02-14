<template>
  <h1 class="text-3xl font-bold text-center mb-40">Progress 📈</h1>
  <div class="mb-80">
    <div v-for="post in reversedPosts" :key="post.id" class="max-w-lg mx-auto mb-16 p-4 border border-gray-300 rounded-lg shadow-sm">
      <div class="flex justify-between items-center mb-2">
        <p class="text-gray-800 font-semibold">{{ post.title }}</p>
        <p class="text-gray-600 text-sm">{{ post.date }}</p>
      </div>
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
        { id: 1, title: 'First day at Genalyte', date: 'Feb 3, 2025', content: 'Got introduced to the facilities, the Merlin, my workplace and completed most of the trainings. Dmytryi and I talked about some projects where I could be helpful.' },
        { id: 2, title: 'CloudLab2 introduction', date: 'Feb 5, 2025', content: 'Diving into Vue and understanding components, state management, and reactivity.' },
        { id: 3, title: 'Solving API Integration Issues', date: 'Feb 20, 2025', content: 'Faced issues with API calls and CORS errors, but managed to resolve them using proper headers and debugging tools.' }
      ]
    };
  },
  computed: {
    reversedPosts() {
      return [...this.posts].reverse(); // Creates a new reversed array without modifying the original
    }
  }
};
</script>

<style scoped>
/* Optional scoped styling */
</style>
