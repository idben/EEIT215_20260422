<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>
<template>
  <div class="container py-3">
    <nav>
      <ul class="nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">about</RouterLink>
        </li>
      </ul>
    </nav>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>
<style scoped>
.active {
  border-bottom: 5px solid #049eec;
}
</style>