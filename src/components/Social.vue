<template>
    <div class="gallery-section">
      <div class="text-section">
        <h3>{{ subtitle }}</h3>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button>{{ buttonText }}</button>
        <div class="heart-icon">
          <i class="fas fa-heart"></i>
        </div>
      </div>
      <div class="image-gallery">
        <div class="gallery">
            <div class="gallery-item" v-for="(item, index) in galleryItems" :key="index">
                <img :src="item.image" :alt="item.alt" :style="{ filter: index === 0 ? 'grayscale(100%) brightness(50%) contrast(150%) hue-rotate(300deg) saturate(200%)' : 'none' }">
                <div v-if="index === 0" class="instagram-logo"><img src="instagram-logo.png" alt="Instagram Logo"></div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageGallery',
    data() {
      return {
        galleryItems: [
          { image: 'image1.jpg', alt: 'Image 1' },
          { image: 'image2.jpg', alt: 'Image 2' },
          { image: 'image3.jpg', alt: 'Image 3' },
          { image: 'image4.jpg', alt: 'Image 4' },
          // Add more gallery items as needed
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .image-gallery {
    width: 100%;
  }
  
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }
  
  .gallery-item {
    flex: 0 0 calc(50% - 20px); /* Two items per row */
    margin: 10px;
    position: relative;
  }
  
  .gallery-item img {
    width: 100%;
    height: 0;
    padding-top: 100%; /* Maintain square aspect ratio */
    object-fit: cover; /* Cover the entire container */
  }
  
  .instagram-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  
  .instagram-logo img {
    width: 50%;
  }
  </style>
  