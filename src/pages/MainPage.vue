<script setup lang="ts">
import CategoryList from '../component/CategoryList.vue';
import ProfileAvatar from '../component/ProfileAvatar.vue';
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar />
      <CategoryList />
    </nav>
    <main><RouterView /></main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  min-height: calc(100vh - 140px);
  gap: 200px;
  max-width: 1450px;
  margin: 140px auto 0 auto;
}

.nav {
  display: flex;
  flex-direction: column;
  min-width: 400px;
  gap: 30px;
}
</style>
