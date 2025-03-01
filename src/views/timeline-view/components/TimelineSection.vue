<template>
  <h1 class="text-3xl font-bold text-center mb-40 text-black">Timeline ⌛️</h1>
  <div class="ml-96 w-2/3 overflow-x-auto py-4 my-60">
    <div class="relative flex items-center">
      <div
        v-for="(item, index) in timelineItems"
        :key="index"
        class="relative flex flex-col items-center text-center px-4"
      >
        <!-- The milestone marker (circle or dot) -->
        <div class="w-4 h-4 bg-blue-500 rounded-full mb-2"></div>

        <!-- The text -->
        <div class="mb-2 font-bold">{{ item.date }}</div>
        <div class="text-sm">{{ item.title }}</div>

        <!-- Render the SVG curve from this item to the next item -->
        <!-- <svg
          v-if="index < timelineItems.length - 1"
          class="absolute top-1/2 left-full"
          :width="segmentWidth"
          :height="segmentHeight"
          viewBox="0 0 100 50" 
          fill="none"
        >
          <path
            d="M 0 25 C 25 0, 75 50, 100 25"
            stroke="gray"
            stroke-width="2"
            fill="transparent"
          />
        </svg> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const timelineItems = ref([
  { date: '02/03/2025', title: 'First Day' },
  { date: '02/05/2025', title: 'VueJS' },
  { date: '02/11/2025', title: 'First Ticket' },
  { date: '02/15/2025', title: 'First Commit' },
  { date: '02/20/2025', title: 'Exploring C++Library' },
  { date: '02/23/2025', title: 'Code quality standards' },
]);

const segmentWidth = 120;
const segmentHeight = 50;
</script>
