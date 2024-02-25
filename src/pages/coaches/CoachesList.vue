<template>
  <section>FILTER</section>
  <section>
  <base-card>

    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button to="/register">Register as Coach</base-button>
    </div>
    <ul v-if="hasCoaches">
      <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName" :lastName="coach.lastName" :areas="coach.areas" :rate="coach.hourlyRate"></coach-item>
    </ul>
    <h3 v-else>No coaches found</h3>
</base-card>
  </section>

</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
export default {
  components: { CoachItem, BaseCard, BaseButton },
  computed: {
    filteredCoaches() {
      return JSON.parse(JSON.stringify(this.$store.getters["coaches"]));
      // return this.$store.getters['coaches/coaches']
    },
    hasCoaches() {
      return JSON.parse(JSON.stringify(this.$store.getters["hasCoaches"]));
      // return this.$store.getters['coaches/hasCoaches']
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
