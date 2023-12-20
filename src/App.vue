<script setup lang="ts">
  import "ress";
  import TimelineCalender from "./components/TimelineCalender.vue";
  import { CalendarEvent } from "./types/CalendarEvent";

  // タイムライン表示するイベント TODO：APIから取得する
  const calendarEvents: CalendarEvent[] = [
    {
      start: "2023-12-19 12:00",
      end: "2023-12-19 14:00",
      title: "キッククラス",
      class: "kick-boxing"
    },
    {
      start: "2023-12-20 12:00",
      end: "2023-12-20 14:00",
      title: "キッククラス",
      class: "kick-boxing"
    }
  ];
</script>

<template>
  <h1>TimeSchedule</h1>
  <TimelineCalender :events="calendarEvents" />
</template>

<style>
  h1 {
    text-align: center;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
</style>
