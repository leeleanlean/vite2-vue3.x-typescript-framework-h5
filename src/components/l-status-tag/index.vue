<template>
  <span class="l-status-tag flex">
    <span :class="['m-r8', 'tag-type', `tag-type-${type}`]"></span>
    <span class="tag-title">{{ title }}</span>
  </span>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{type: "success" | "primary" | "info" | "warning" | "danger" | "default"; title: string}>(), {
  type: "success",
});
</script>
<style lang="scss" scoped>
.l-status-tag {
  vertical-align: middle;
  .tag-type {
    position: relative;
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;

    @mixin set-color($color) {
      background-color: $color;
      &:after {
        border-color: $color;
        animation: antStatusProcessing 1.2s ease-in-out infinite;
      }
    }

    &-success {
      @include set-color(#58d55d);
    }
    &-primary {
      @include set-color(#76d3ff);
    }
    &-info {
      @include set-color(#999);
    }
    &-warning {
      @include set-color(#ffb025);
    }
    &-danger {
      @include set-color(#f85959);
    }
    &-default {
      @include set-color(#cdcdcd);
    }

    &:after {
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-width: 1px;
      border-style: solid;
      border-radius: 50%;
      content: "";
    }
  }
  @keyframes antStatusProcessing {
    0% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    to {
      transform: scale(2.4);
      opacity: 0;
    }
  }
}
</style>
