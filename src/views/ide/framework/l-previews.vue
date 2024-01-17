<template>
  <div class="previews">
    <draggable
      :list="previews"
      :group="{name: 'pages'}"
      class="items"
      :animation="100"
      :item-key="Date.now().toString()"
      @end="end"
    >
      <template #item="{element, index}">
        <div class="item">
          <div class="handle">
            <div class="icon">handle</div>
            <div class="remove" @click="remove(index)">delete</div>
          </div>
          <div class="content" :class="{active: active === index}" @click="change(index)">
            <l-component :preview="element"></l-component>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import lComponent from "./l-component.vue";

const emits = defineEmits(["change"]);
const previews = ref<any>([]);
const active = ref();

/**
 * 删除元素
 */
const remove = (index: number) => (previews.value = previews.value.filter((v: any, k: number) => k !== index));

/**
 * 拖拽元素
 */
const end = ({newIndex}: {newIndex: number}) => (active.value = newIndex);

/**
 * 点击元素
 */
const change = (index: number) => {
  active.value = index;
  emitsChange();
};

/**
 * 提交自定义事件
 */
const emitsChange = () => emits("change", previews.value[active.value]);
</script>
<style scoped lang="scss">
.previews {
  width: 375px;
  height: 700px;
  user-select: none;
  background-color: #ffffff;
  .items {
    width: 475px;
    height: 700px;
    position: relative;
    left: -100px;
    .item {
      display: flex;
      min-height: 44px;
      box-sizing: border-box;
      cursor: pointer;
      .handle {
        width: 100px;
      }
      .content {
        width: 375px;
        &.active {
          border: 2px solid #1966ff;
        }
      }
    }

    .sortable-ghost {
      &:not(.handle) {
        position: relative;
        width: 375px;
        left: 100px;
        border: 2px solid #1966ff;
        background-color: #f0f6ff;
        .handle {
          position: relative;
          left: -100px;
        }
        .content {
          width: 375px;
          left: -100px;
          &.active {
            border: none;
          }
        }
      }
    }

    .item.sortable-chosen.sortable-ghost {
      .content {
        position: relative;
        left: -78px;
      }
    }
  }
}
</style>
