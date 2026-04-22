<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
    windowWidth.value = window.innerWidth;
    console.log(window.innerWidth);
}

onMounted(() => {
    console.log("元件已掛載");
    window.addEventListener('resize', handleResize);
})

onUnmounted(() => {
    console.log("元件已卸載");
    window.removeEventListener('resize', handleResize);
})
</script>
<template>
    <h1>onMounted/onUnmounted 測試</h1>
    <p>
        視窗寬度: <span class="badge bg-danger text-white">{{ windowWidth }}</span>px
    </p>
</template>
<style scoped></style>