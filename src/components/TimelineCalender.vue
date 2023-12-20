<script setup lang="ts">
  import "ress";
  import VueCal from "vue-cal";
  import "vue-cal/dist/vuecal.css";
  import { ref } from "vue";
  import { CalendarEvent } from "../types/CalendarEvent";

  // タイムラインイベントを受け取る
  const props = defineProps<{ events: CalendarEvent[] }>();

  // カレンダーのイベントをクリックしたときにモーダルを開く関数を呼び出す。
  const handleEventClick = (event, e) => {
    e.preventDefault(); // デフォルトの動作を防止
    openModal(event); // モーダルを開く関数を呼び出し
  };

  // モーダルの状態管理
  const isModalVisible = ref(false);
  const selectedEvent = ref(null);

  // モーダルを開く関数
  const openModal = (event) => {
    selectedEvent.value = event;
    isModalVisible.value = true;
  };

  // モーダルを閉じる関数
  const closeModal = () => {
    isModalVisible.value = false;
  };
</script>

<template>
  <vue-cal
    :disable-views="['years', 'year', 'month']"
    active-view="week"
    :time-from="10 * 60"
    :time-to="24 * 60"
    :time-step="60"
    :events="props.events"
    :on-event-click="handleEventClick"
    locale="ja"
  />

  <div v-if="isModalVisible" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h3>{{ selectedEvent.title }}</h3>
      <!-- ここに他のイベント情報を表示 -->
    </div>
  </div>
</template>

<style>
  /* カレンダーイベントのスタイル */
  .kick-boxing {
    background-color: red;
    color: black;
  }

  /* 以下はモーダルの実装 */
  .modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
