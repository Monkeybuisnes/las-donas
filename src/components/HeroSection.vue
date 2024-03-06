<template>
    <div class="hero-section">
      <div class="background-images">
        <!-- Left background image -->
        <div class="image left"></div>
        <!-- Right background image -->
        <div class="image right"></div>
      </div>
      <div class="content">
        <h1>Title</h1>
        <p>Subtitle</p>
        <button @click="handleClick">Button</button>
      </div>
    </div>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroSection',
  methods: {
    handleClick() {
      // Add your logic here
      console.log('Button clicked');
    }
  }
});
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.background-images {
  display: flex;
  width: 200%; /* Set width to 200% to accommodate two images */
}

.background-images .image {
  width: 50%;
  height: 100vh; /* Adjust height as needed */
  background-size: cover;
  background-position: center;
}

.background-images .left {
  background-image: url('left-image.jpg');
}

.background-images .right {
  background-image: url('right-image.jpg');
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.content p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.content button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.content button:hover {
  background-color: #0056b3;
}
</style>
