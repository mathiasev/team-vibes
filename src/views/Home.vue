<template>
  <div class="home">
    <h1>Team Vibes</h1>
    <team-vibe-chart></team-vibe-chart>
    <vibe-picker></vibe-picker>
  </div>
</template>

<script>
import TeamVibeChart from "../components/TeamVibeChart.vue";
import VibePicker from "../components/VibePicker.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { TeamVibeChart, VibePicker },
};
</script>
