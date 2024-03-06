<template>
    <div class="testimonials">
      <div class="header">
        <h3>{{ subtitle }}</h3>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
  
      <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
        <div class="top-section">
          <div class="name-date">
            <h2>{{ testimonial.name }}</h2>
            <h4>{{ testimonial.date }}</h4>
          </div>
          <div class="avatar">
            <img :src="testimonial.avatar" alt="User Avatar" />
          </div>
        </div>
        <div class="bottom-section">
          <div class="rating">
            <img src="star.png" v-for="star in 5" alt="Star" />
          </div>
          <p class="testimonial">{{ testimonial.comment }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Testimonials',
    props: {
      subtitle: String,
      title: String,
      description: String
    },
    data() {
      return {
        testimonials: [
          { name: 'John Doe', date: 'January 1, 2024', avatar: 'john.jpg', comment: 'Great experience with this service!' },
          { name: 'Jane Smith', date: 'February 15, 2024', avatar: 'jane.jpg', comment: 'Very satisfied with the results.' },
          { name: 'Alice Johnson', date: 'March 10, 2024', avatar: 'alice.jpg', comment: 'Highly recommend this product.' },
          // Add more testimonials as needed
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .testimonials {
    text-align: center;
  }
  
  .header {
    margin-bottom: 20px;
  }
  
  .testimonial-card {
    display: inline-block;
    text-align: left;
    margin-bottom: 40px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 300px;
  }
  
  .name-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 10px;
  }
  
  .rating {
    margin-bottom: 10px;
  }
  
  .rating img {
    width: 20px;
    height: auto;
    margin-right: 5px;
  }
  
  .testimonial {
    margin-top: 10px;
  }
  </style>
  