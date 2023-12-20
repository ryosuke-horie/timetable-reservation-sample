<script setup lang="ts">
  import "ress";
  import VueCal from "vue-cal";
  import "vue-cal/dist/vuecal.css";
</script>

<template>
  <h1>TimeSchedule</h1>
  <vue-cal
    :disable-views="['years', 'year', 'month']"
    active-view="week"
    :time-from="10 * 60"
    :time-to="24 * 60"
    :time-step="60"
  />
</template>

<style scoped>
  h1 {
    text-align: center;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
</style>
