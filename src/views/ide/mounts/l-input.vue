<template>
  <div>l-input {{ preview }}</div>
</template>

<script setup lang="ts">
import useStoreStackData from "../store";

defineProps<{preview: any}>();
const USE_STORE_STACK_DATA = useStoreStackData();
console.log(USE_STORE_STACK_DATA);
</script>

<script lang="ts">
export default {
  name: "LInput",
  title: "输入框",
  defaultData: [
    {label: "输入框", field: "name"},
    {label: "下拉框", field: "select"},
  ],
};
</script>
