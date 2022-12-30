<template>
  <view class="page-textarea">
    <view>使用 v-model</view>
    <STextarea placeholder="请输入文字" v-model="modalText" />
    <view class="blank-h-20" />
    <view>使用 value 属性和 input 事件</view>
    <STextarea placeholder="请输入文字" :value="text" @input="handleInput" />
  </view>
</template>

<script setup>
import { ref } from "vue";

import { STextarea } from "@packages/index";

import "./index.less";

const modalText = ref("");

const text = ref("");

function handleInput(value) {
  text.value = value;
}
</script>
