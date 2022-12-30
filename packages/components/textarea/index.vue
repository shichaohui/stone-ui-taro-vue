<template>
  <view class="s-textarea">
    <textarea
      v-if="showRealTextarea"
      class="s-textarea__real"
      :placeholder-class="`s-textarea__real s-textarea__real-placeholder ${placeholderClass}`"
      :placeholder="placeholder"
      :auto-focus="true"
      :value="showingValue"
      :maxlength="maxlength"
      :cursor-spacing="22"
      :confirm-type="confirmType"
      @blur="handleBlur"
      @input="handleInput"
      v-bind="$attrs"
    />
    <text
      v-else
      :class="{
        's-textarea__fake': true,
        's-textarea__fake-placeholder': !showingValue,
        [`${placeholderClass}`]: !showingValue,
      }"
      :user-select="true"
      @tap="handleShowRealTextarea"
    >
      {{ showingValue || placeholder }}
    </text>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import "./index.less";

// 定义组件参数
interface Props {
  /** 占位信息 */
  placeholder?: string;
  /** 占位信息样式 */
  placeholderClass?: string;
  /** 内容 */
  modelValue?: string;
  /** 内容 */
  value?: string;
  /** 最大输入长度 */
  maxlength?: number;
  /** 设置键盘右下角按钮的文字 */
  confirmType?: "send" | "search" | "next" | "go" | "done" | "return";
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "请输入",
  placeholderClass: "",
  value: "",
  maxlength: -1,
  confirmType: "done",
});

// 定义组件事件
interface Emits {
  (e: "update:modelValue", data: string): void;
  (e: "input", data: string): void;
}

const emits = defineEmits<Emits>();

// 是否展示真实输入框
const showRealTextarea = ref(false);
// 正在展示的输入内容
const showingValue = computed(() => props.modelValue || props.value || "");

// 展示真实输入框
function handleShowRealTextarea() {
  showRealTextarea.value = true;
}

// 真实输入框失去焦点
function handleBlur() {
  showRealTextarea.value = false;
}

// 输入内容
function handleInput(event) {
  const { value } = event.detail;
  emits("update:modelValue", value);
  emits("input", value);
}
</script>
