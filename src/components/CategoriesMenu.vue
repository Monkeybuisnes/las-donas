<template>
    <nav class="categories-menu">
      <ul>
        <li><a href="#">Category 1</a></li>
        <li><a href="#">Category 2</a></li>
        <li><a href="#">Category 3</a></li>
        <li><a href="#">Category 4</a></li>
        <li><a href="#">Category 5</a></li>
        <li><a href="#">Category 6</a></li>
        <li><a href="#">Category 7</a></li>
      </ul>
    </nav>
  </template>
  <style scoped>
  .categories-menu {
    background-color: #333;
  }
  
  .categories-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  .categories-menu li {
    margin-right: 20px;
  }
  
  .categories-menu li:last-child {
    margin-right: 0;
  }
  
  .categories-menu a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    transition: background-color 0.3s;
  }
  
  .categories-menu a:hover {
    background-color: #555;
  }
  </style>
  