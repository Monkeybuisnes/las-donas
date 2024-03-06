<template>
    <div class="cta">
      <video autoplay muted loop class="background-video">
        <source src="your-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="content">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CallToAction',
    props: {
      title: String,
      subtitle: String
    }
  };
  </script>
  
  <style scoped>
  .cta {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
  }
  
  .content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
  }
  
  .content h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .content p {
    font-size: 1.5rem;
  }
  </style>
  