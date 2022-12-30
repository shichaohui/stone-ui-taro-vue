<template>
  <view class="s-input">
    <input
      v-if="showRealInput"
      class="s-input__real"
      :placeholder-class="`s-input__real s-input__real-placeholder ${placeholderClass}`"
      :placeholder="placeholder"
      :focus="true"
      :cursor="showingValue.length"
      :value="showingValue"
      :maxlength="maxlength"
      :cursor-spacing="22"
      :confirm-type="confirmType"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      v-bind="$attrs"
    />
    <text
      v-else
      :class="{
        's-input__fake': true,
        's-input__fake-placeholder': !showingValue,
        [`${placeholderClass}`]: !showingValue,
      }"
      :user-select="true"
      @tap="handleShowRealInput"
    >
      {{ showingValue || placeholder }}
    </text>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { InputProps } from "@tarojs/components/types/Input";

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
  confirmType?: keyof InputProps.ConfirmType;
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
const showRealInput = ref(false);
// 真实输入框是否有焦点
const hasFocus = ref(false);

// 正在展示的输入内容
const showingValue = computed(() => props.modelValue || props.value || "");

// 展示真实输入框
function handleShowRealInput() {
  showRealInput.value = true;
}

// 真实输入框获取焦点
function handleFocus() {
  hasFocus.value = true;
}

// 真实输入框失去焦点
function handleBlur() {
  showRealInput.value = false;
  if (hasFocus.value) {
    hasFocus.value = false;
  } else {
    setTimeout(() => {
      showRealInput.value = true;
    }, 0);
  }
}

// 输入内容
function handleInput(event) {
  const { value } = event.detail;
  emits("update:modelValue", value);
  emits("input", value);
}
</script>
