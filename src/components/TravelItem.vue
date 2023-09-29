<template>
    <div class="card text-bg-light h-100" style="width: 18rem">
      <img v-if="item.img" :src="item.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"></h5>
        <router-link :to="{ name: 'news', params: { id: item.name }}" class="icon-link gap-1 icon-link-hover stretched-link">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: Object,
    },
  };
  </script>