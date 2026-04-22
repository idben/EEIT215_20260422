<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(window.innerWidth);
</script>
<template>
    <h1>onMounted/onUnmounted 測試</h1>
    <p>
        視窗寬度: {{ windowWidth }}px
    </p>
</template>
<style scoped></style>