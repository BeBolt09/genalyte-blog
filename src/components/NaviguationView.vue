<template>
    <nav class="fixed left-12 top-1/2 transform -translate-y-1/2 font-work">
      <ul class="space-y-4">
        <li v-for="item in menuItems" :key="item.path">
          <router-link 
            :to="item.path" 
            class="text-2xl"
            :class="{ 'font-bold underline': isActive(item.path) }"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default{
    data() {
      return {
        menuItems: [
          { name: "Blog section", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: "Timeline", path: "/timeline" },
          { name: "Contact", path: "/contact" },
        ],
      };
    },
    computed: {
      currentPath() {
        return this.$route?.path || "/";
      },
    },
    methods: {
      isActive(path) {
        return this.currentPath === path;
      },
    },
  };
  </script>
  