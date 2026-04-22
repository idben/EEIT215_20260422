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
        <li class="nav-item">
          <RouterLink class="nav-link" to="/mount">mount</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/axios">axios</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/axios2">axios2</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/grid2">格狀系統</RouterLink>
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