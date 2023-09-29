<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const travellist = ref ([
 
  {name: 'Cafe นั่งชิว Chiangmai',
  
  
  img:"https://assets.arquitecturaviva.com/assets/uploads/articulos/44770/av_42808.webp?h=5a7634f8"},

  {name: 'Cafe de INNOVA',
  Facebook : 'Cafe de INNOVA',
  GPS : "https://goo.gl/maps/JmxHSYknfXJDdR3h6",
  img:"https://www.tripgether.com/wp-content/uploads/tripgetter/CM_6.jpg"},

  {name: 'Lonely Heart ',
  Facebook : 'Lonely Hearts Cafe Chiangmai',
  GPS : "https://goo.gl/maps/K58wnHtHpvBDVfx97",
  img:"https://www.tripgether.com/wp-content/uploads/tripgetter/CM_22.jpg"},

  {name: 'Jaiboon Cafe',
  Facebook : 'Jaiboon Cafe',
  GPS : "https://goo.gl/maps/PbJZvP68a2y8ow7SA",
  img:"https://www.tripgether.com/wp-content/uploads/tripgetter/CM_26.jpg"},

  {name: 'Viangpha Cafe & Camp',
  Facebook : 'Viangpha Cafe & Camp',
  GPS : "https://goo.gl/maps/W3yi1Guh3CNw19YFA",
  img:"https://www.tripgether.com/wp-content/uploads/tripgetter/CM_12.jpg"},

  {name: 'Laan-Tims Cafe & Gallery',
  Facebook : 'Laan-Tims Cafe & Gallery',
  GPS : "https://goo.gl/maps/irVioJsM6FB6E1u38",
  img:"https://www.tripgether.com/wp-content/uploads/2023/09/BaanLanTim1-900.jpg"},
]); 
</script>

<template>
    <div class="p-3 m-0 border-0 bd-example m-0 border-0">
      <div class="text-center">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="(item, index) in travellist" :key="index">
            <div class="card text-bg-light h-100" style="width: 18rem">
              <img v-if="item.img" :src="item.img" class="card-img-top" alt="Place Image" />
              
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <RouterLink :to="{ name: 'ANewsCard', params: { name: item.name }}" class="icon-link gap-1 icon-link-hover stretched-link">
                  {{ item.name }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  