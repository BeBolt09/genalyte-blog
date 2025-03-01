// Example: composables/useTimeline.js
import { ref } from 'vue';

export function useTimeline() {
  const timelineItems = ref([
    { date: '02/03/2025', title: 'First Day' },
    { date: '02/05/2025', title: 'VueJS' },
    { date: '02/11/2025', title: 'First Ticket' },
    { date: '02/15/2025', title: 'First Commit' },
    { date: '02/20/2025', title: 'Exploring C++Library' },
    { date: '02/23/2025', title: 'Code quality standards' },
  ]);

  return {
    timelineItems
  };
}
