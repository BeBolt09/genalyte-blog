<script>
export default {
  name: 'BlogSection',
  data() {
    return {
      posts: [
        { 
          id: 1, 
          title: 'Orientation and Training at Genalyte', 
          date: 'Feb 3, 2025', 
          content: 'Got introduced to the facilities, the Merlin, my workplace and completed most of the trainings. Dmytryi and I talked about some projects where I could be helpful.' 
        },
        { 
          id: 2, 
          title: 'Exploring CloudLab2 and Vue.js', 
          date: 'Feb 5, 2025', 
          content: 'Diving into Vue and understanding components, state management, and reactivity.' 
        },
        { 
          id: 3, 
          title: 'Introduction to Genalyte and QCDB Training', 
          date: 'Feb 3, 2025', 
          content: 'Intro to Genalyte.\nTour of the office.\nPurpose, goals and mission.\n-eLearnings QCDB.' 
        },
        { 
          id: 4, 
          title: 'Getting Started with CloudLab and UnifiedPortal', 
          date: 'Feb 4, 2025', 
          content: 'Intro to CloudLab/UnifiedPortal.\nMeeting Juan and Javi.\nAccess to the “unifiedportal” repository.' 
        },
        { 
          id: 5, 
          title: 'First Ticket: Creating New Panels and Learning Vue.js', 
          date: 'Feb 5, 2025', 
          content: 'Starting my first ticket “GLIS-10185”.\nCreating new Chemistry/Hematology Panels.\nGetting started with Vue.JS.\nIntro to CloudLabAPI.' 
        },
        { 
          id: 6, 
          title: 'Panel Functionality and Code Structure Challenges', 
          date: 'Feb 6, 2025', 
          content: 'Functionality of ticket working (Creating new panel).\nCode structure is far from good.\nLearning/Following current codebase structure.' 
        },
        { 
          id: 7, 
          title: 'Dynamic Instrument Fetching and First Pull Request', 
          date: 'Feb 7, 2025', 
          content: 'Creating Types and Properties.\nSeparating composables.\nFetching instruments dynamically from an incorrect endpoint as a workaround.\nCommunicated to the backend dev to create the correct endpoint.\nUpdated routing, services, types, view structure.\nSubmitted first Pull Request (Fun fact).' 
        },
        { 
          id: 8, 
          title: 'CloudLab Architecture Review and PR Resubmission', 
          date: 'Feb 10, 2025', 
          content: 'Review of CloudLab Architecture(Docs).\nRe-submitted PR with passing build.\n1 on 1 with Javi.\nC# and C++ review.' 
        },
        { 
          id: 9, 
          title: 'Improving PR and Creating Editing Functionality', 
          date: 'Feb 11, 2025', 
          content: 'Fixing comments from PR.\nCreating provider for editing functionality.\nLearning about “lint:fix”, reworked “panel-non-mav-form.ts”.\nTalked to Dmytro about current file struct & future requirements.' 
        },
        { 
          id: 10, 
          title: 'Approval of GLIS-10185 and Starting GLIS-10198', 
          date: 'Feb 12, 2025', 
          content: 'Ticket GLIS-10185 approved and merged into master.\nStart of ticket GLIS-10198.\nRedirecting from “breadcrums” back to the panels page.\nDisable submissions if no changes were made.\nLoading indicator as panel info is loading into edit mode.' 
        },
        { 
          id: 11, 
          title: 'Progress on GLIS-10198 and Observing Robot Arm Work', 
          date: 'Feb 13, 2025', 
          content: 'Worked on GLIS-10198.\nNotification upon successful submission, notification upon missing requirements.\nWatched Alex working on RobotArm.' 
        },
        { 
          id: 12, 
          title: 'Completing GLIS-10198 and Robot Arm Script Review', 
          date: 'Feb 14, 2025', 
          content: 'Ticket GLIS-10198 mostly completed, waiting for review.\nUpdated “fetchInstrument()” to the correct endpoint.\nReviewed robot arm scripts and C++ translations.' 
        },
        { 
          id: 13, 
          title: 'President\'s Day Break', 
          date: 'Feb 17, 2025', 
          content: 'President’s day' 
        },
        { 
          id: 14, 
          title: 'New Tickets and Component/Composable Separation', 
          date: 'Feb 18, 2025', 
          content: 'Got assigned new tickets for future of Chem/Hem Panels.\nWas instructed to separate composables and components for separation of concern.\nWorked on new file structure and separation of components and composables.' 
        },
        { 
          id: 15, 
          title: 'Refactoring with Inspiration from Chip-Carriers-View', 
          date: 'Feb 19, 2025', 
          content: 'Took inspiration from chip-carriers-view for file structure.\nFiles changed and working for new and edit panels with separated components and composables.' 
        },
        { 
          id: 16, 
          title: 'Unit Testing for Vue Composables', 
          date: 'Feb 20, 2025', 
          content: 'PR was reviewed and was close to approval.\nOnly missing Unit test before approval (“Javi”).\nLearned how to write unit tests for Vue composables.\nCreated ⅔ unit tests needed.' 
        },
        { 
          id: 17, 
          title: 'Completing Unit Tests and File Structure Rework', 
          date: 'Feb 21, 2025', 
          content: 'Completed unit tests.\nMet with Dmytro and established I should revert back to the original file structure. 😵‍💫\nFound working and correct file structure.\nCompleted changes to better file structure.\nSubmitted PR for review.' 
        },
        { 
          id: 18, 
          title: 'Implementing SRP, DRY, and Factory Patterns', 
          date: 'Feb 24, 2025', 
          content: 'PR got reviewed with minor comments.\nSolved some issues in files to follow SRP, DRY, Factory patterns.\nStarted new ticket GLIS-10206.\nCompleted full functionality of 10206.' 
        }
      ]
    };
  },
  computed: {
    reversedPosts() {
      return [...this.posts].reverse();
    }
  }
};
</script>

<template>
  <h1 class="text-3xl font-bold text-center mb-40 text-black">Progress 📈</h1>
  <div class="mb-80">
    <div v-for="post in reversedPosts" :key="post.id" class="font-sans max-w-xl mx-auto mb-16 p-4 border border-gray-300 rounded-lg shadow-sm">
      <div class="flex justify-between items-center mb-2">
        <p class="text-gray-800 font-semibold">{{ post.title }}</p>
        <p class="text-gray-600 text-sm">{{ post.date }}</p>
      </div>
      <p class="text-gray-700 leading-relaxed">{{ post.content }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>