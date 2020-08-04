<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img src="../assets/caroussel1.jpg" alt="image slot">
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img src="../assets/caroussel2.jpg" alt="image slot">
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img src="../assets/caroussel3.jpg" alt="image slot">
        </template>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
    </b-carousel>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>

</style>