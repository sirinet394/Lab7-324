<script setup>

import { RouterView } from 'vue-router'
import BlogHeader from '@/views/BlogHeader.vue'

// import Jumbo from '@/views/JumboHead.vue'
</script>

<template>
     <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
  <div class="container">
    <BlogHeader></BlogHeader>
    <!-- <Jumbo title=" My title" desc="csmju Drop tomorow"></Jumbo> -->
    <div class="main">
      <RouterView />
    </div>
    <div class="footer"></div>
  </div>
</template>
<style scoped></style>
