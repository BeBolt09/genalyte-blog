<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <nav class="flex justify-center bg-white p-4 shadow-md">
      <ul class="flex gap-8 border border-red-500">
        <li class="border border-blue-500">
          <router-link to="/" class="text-blue-500 hover:underline">Home</router-link>
        </li>
        <li class="border border-blue-500">
          <router-link to="/blog" class="text-blue-500 hover:underline">Blog</router-link>
        </li>
        <li class="border border-blue-500">
          <router-link to="/about" class="text-blue-500 hover:underline">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

