<template>
  <!-- 右侧配置 -->
  <div class="config">
    <CustomVueScrollbar style="height: calc(100vh - 24px)">
      {{ mount?.key }}
      {{ mount?.defaultData }}
      <div>
        <template v-for="item in mount?.defaultData" :key="item.field">
          <a-input />
        </template>
      </div>
    </CustomVueScrollbar>
  </div>
</template>

<script setup lang="ts">
import CustomVueScrollbar from "custom-vue-scrollbar";
import "custom-vue-scrollbar/dist/style.css";
import {IMountType} from "../mounts/index";
import useStoreStackData from "../store";

defineProps<{mount?: IMountType}>();
const USE_STORE_STACK_DATA = useStoreStackData();
</script>
