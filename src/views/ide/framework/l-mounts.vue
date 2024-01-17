<template>
  <div class="mounts">
    <CustomVueScrollbar style="height: calc(100vh)">
      <draggable
        :group="{name: 'pages', pull: 'clone', put: false}"
        class="items"
        :list="mounts"
        :sort="false"
        :item-key="Date.now().toString()"
        :clone="clone"
      >
        <template #item="{element}">
          <div class="item">{{ element.name }}</div>
        </template>
      </draggable>
    </CustomVueScrollbar>
  </div>
</template>

<script setup lang="ts">
import CustomVueScrollbar from "custom-vue-scrollbar";
import "custom-vue-scrollbar/dist/style.css";
import draggable from "vuedraggable";
import {mounts} from "../mounts/index";

const clone = ({name, title, defaultData}: {name: string; title: string; defaultData: any}) => ({
  name,
  title,
  defaultData,
  key: Date.now(),
});
</script>

<style lang="scss" scoped>
.mounts {
  width: 200px;
  height: 100vh;
  background-color: #ffffff;
  .items {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 60.5px;
      height: 60.5px;
      border-radius: 4px;
      line-height: 60px;
      text-align: center;
      margin: 0 3px;
      &:hover {
        background-color: #f0f6ff;
        cursor: pointer;
      }
    }
  }
}
</style>
