<template>
  <view>tmpl</view>
</template>

<script setup lang="ts">
import "./index.less";

// 定义组件参数
interface Props {}

const props = withDefaults(defineProps<Props>(), {});

// 定义组件参数
interface Emits {
  (e: "", data: string): void;
}

const emits = defineEmits<Emits>();
</script>
