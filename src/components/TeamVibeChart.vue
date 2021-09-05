<template>
  <div id="chart">
    {{ getVibes }}
  </div>
</template>

<script>
import Chart from "chart.js";
import { mapGetters } from "vuex";
export default {
  name: "vibe-chart",
  computed: {
    ...mapGetters("vibes", ["getVibes"]),
  },
};
</script>

<style scoped>
#chart {
  min-height: 40rem;
  border: 1px solid #4c4c4c;
}
</style>
