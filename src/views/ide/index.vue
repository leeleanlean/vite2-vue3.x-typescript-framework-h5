<template>
  <header>
    <m-select style="width: 120px">
      <m-option label="page1">page1</m-option>
      <m-option label="page2">page2</m-option>
    </m-select>
    <button>保存</button>
  </header>
  <div class="ide flex">
    <LMounts></LMounts>
    <LPreviews @change="change"></LPreviews>
    <LConfig :mount="mount"></LConfig>
  </div>
</template>

<script setup lang="ts">
import "./style/ide.scss";
import {IMountType} from "./mounts/index";
import LMounts from "./framework/l-mounts.vue";
import LPreviews from "./framework/l-previews.vue";
import LConfig from "./framework/l-config.vue";

const mount = ref();
const change = (data: IMountType) => (mount.value = data);
</script>
