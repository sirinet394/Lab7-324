<script setup>
import {ref} from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const placeName = ref(route.params.name)
</script>
<template>
    <div>
      <h2>{{ placeName }}</h2>
      
      
      
    </div>
</template>
  
<script>
  export default {
    props: {
      name: String, // Receive the name as a prop
      img: String, // Receive the img as a prop
    },
  };
</script>
  