<template>
  <view class="page-home">
    <view
      v-for="page in pageList"
      :key="page.path"
      class="page-item"
      @tap="handleClickPage(page)"
    >
      {{ page.name }}
    </view>
  </view>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";

import { AppPage } from "@/app-pages";

import "./index.less";

const pageList = [
  { name: "Textarea", path: AppPage.Textarea },
  { name: "Input", path: AppPage.Input },
];

function handleClickPage(page) {
  Taro.navigateTo({
    url: page.path,
  });
}
</script>
