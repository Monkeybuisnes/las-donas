<template>
    <div class="product-slider">
      <!-- Title and Subtitle -->
      <div class="title">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
  
      <div class="slider">
        <!-- Products -->
        <div v-for="chunk in chunks" :key="chunk.id" class="row">
          <div v-for="product in chunk" :key="product.id" class="product">
            <img :src="product.image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>{{ product.price }}</p>
            <button @click="addToBag(product)">Add to Bag</button>
          </div>
        </div>
      </div>
  
      <!-- Left and Right Arrows -->
      <button class="arrow left" @click="prevSlide">&#10094;</button>
      <button class="arrow right" @click="nextSlide">&#10095;</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductSlider',
    props: {
      title: String,
      subtitle: String
    },
    data() {
      return {
        products: [
          { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$10 - $20', image: 'product1.jpg' },
          { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$20 - $30', image: 'product2.jpg' },
          { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$30 - $40', image: 'product3.jpg' },
          { id: 4, name: 'Product 4', description: 'Description of Product 4', price: '$40 - $50', image: 'product4.jpg' },
          // Add more products as needed
        ],
        currentSlide: 0
      };
    },
    computed: {
      chunks() {
        const size = 4;
        return this.products.reduce((acc, _, i) => {
          if (i % size === 0) {
            acc.push(this.products.slice(i, i + size));
          }
          return acc;
        }, []);
      }
    },
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.chunks.length;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.chunks.length) % this.chunks.length;
      },
      addToBag(product) {
        // Add logic to add product to shopping bag
        console.log('Added to bag:', product);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-slider {
    position: relative;
  }
  
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .slider {
    display: flex;
    overflow-x: hidden;
  }
  
  .row {
    display: flex;
    margin-bottom: 20px;
  }
  
  .product {
    flex: 1;
    margin-right: 20px;
  }
  
  .product img {
    width: 100%;
    height: auto;
  }
  
  .arrow {
    position: absolute;
    bottom: 10px;
    font-size: 2rem;
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  
  .left {
    left: 10px;
  }
  
  .right {
    right: 10px;
  }
  </style>
  