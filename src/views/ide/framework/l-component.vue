<template>
  <component
    :is="mounts.find((item) => item.name === props.preview.name)?.component ?? ''"
    :preview="preview"
  ></component>
</template>

<script setup lang="ts">
import {mounts, IMountType} from "../mounts/index";

const props = defineProps<{preview: IMountType}>();
</script>
