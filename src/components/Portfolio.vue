<template>
    <div class="portfolio">
      <div class="top-row">
        <div class="block" v-for="(item, index) in topRowItems" :key="index">
          <div class="content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
      <div class="bottom-row">
        <div class="block" v-for="(item, index) in bottomRowItems" :key="index">
          <div class="content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Portfolio',
    data() {
      return {
        items: [
          { title: 'Project 1', description: 'Description of Project 1', image: 'project1.jpg' },
          { title: 'Project 2', description: 'Description of Project 2', image: 'project2.jpg' },
          { title: 'Project 3', description: 'Description of Project 3', image: 'project3.jpg' },
          { title: 'Project 4', description: 'Description of Project 4', image: 'project4.jpg' },
          // Add more projects as needed
        ]
      };
    },
    computed: {
      topRowItems() {
        return this.items.slice(0, 3); // First three items
      },
      bottomRowItems() {
        return this.items.slice(3); // Last item
      }
    }
  };
  </script>
  
  <style scoped>
  .portfolio {
    display: flex;
    flex-direction: column;
  }
  
  .top-row {
    display: flex;
    margin-bottom: 20px;
  }
  
  .block {
    flex: 1;
    margin-right: 20px;
    position: relative;
  }
  
  .block:last-child {
    margin-right: 0;
  }
  
  .block .content {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #fff;
  }
  
  .block img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .block h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  
  .block p {
    margin: 0;
  }
  
  .bottom-row .block {
    margin-right: 0;
  }
  </style>
  