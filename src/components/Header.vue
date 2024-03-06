<template>
     <div class="text-banner">
      <p>Welcome to our website!</p>
    </div>
    <header class="header">
      <div class="search-bar">
        <!-- Search input field -->
        <input type="text" placeholder="Search..." />
        <!-- Search icon button -->
        <button class="icon-button"><i class="fas fa-search"></i></button>
      </div>
      <div class="logo">
        <!-- Your logo image or text goes here -->
        <img src="logo.png" alt="Logo" />
      </div>
      <div class="buttons">
        <!-- Icon buttons for user and shopping bag -->
        <button class="icon-button"><i class="fas fa-user"></i></button>
        <button class="icon-button"><i class="fas fa-shopping-bag"></i></button>
      </div>
    </header>
  </template>
  
  <script>
    export default {
    name: 'Header'
    }
    </script>

  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  .text-banner {
    background-color: #f0f0f0;
    padding: 5px 20px;
    text-align: center;
    font-size: 14px;
    color: #333;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
  }
  
  .logo img {
    width: 100px; /* Adjust the width of the logo */
  }
  
  .search-bar {
    flex: 1;
    margin-right: 20px;
    position: relative;
  }
  
  .search-bar input {
    width: 100%;
    padding: 8px 10px;
    border-radius: 20px;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
  }
  
  .search-bar .icon-button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    color: #fff;
  }
  
  .buttons .icon-button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    margin-left: 10px;
  }
  </style>
  