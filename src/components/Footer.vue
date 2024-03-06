<template>
    <footer class="footer">
      <div class="footer-divider">
        <div class="logo">
          <img src="logo.png" alt="Logo">
        </div>
        <div class="menus">
          <ul>
            <li><a href="#">Sobre Nosotros</a>
              <ul>
                <li><a href="#">Pelletesque</a></li>
                <li><a href="#">Suspendisse</a></li>
                <li><a href="#">Carabitur</a></li>
                <li><a href="#">Etiam fringilla</a></li>
              </ul>
            </li>
            <li><a href="#">Categorías</a>
              <ul>
                <li><a href="#">Pelletesque</a></li>
                <li><a href="#">Suspendisse</a></li>
                <li><a href="#">Carabitur</a></li>
                <li><a href="#">Etiam fringilla</a></li>
              </ul>
            </li>
            <li><a href="#">¿Necesita ayuda para comprar?</a>
              <ul>
                <li><a href="#">Pelletesque</a></li>
                <li><a href="#">Suspendisse</a></li>
                <li><a href="#">Carabitur</a></li>
                <li><a href="#">Etiam fringilla</a></li>
              </ul>
            </li>
            <li><a href="#">Políticas</a><ul>
                <li><a href="#">Pelletesque</a></li>
                <li><a href="#">Suspendisse</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-content">
        <div class="footer-section">
          <h3>About Us</h3>
          <p>Insert your About Us content here.</p>
        </div>
        <div class="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="copyrights">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
        <div class="payment-platforms">
          <p>We accept:</p>
          <!-- Add your payment platform icons here -->
          <img src="visa.png" alt="Visa">
          <img src="mastercard.png" alt="Mastercard">
          <img src="paypal.png" alt="PayPal">
          <img src="american_express.png" alt="American Express">
          <img src="diners.png" alt="Diners Club">
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 50px 0;
  }
  
  .footer-divider {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .logo img {
    max-width: 100px;
  }
  
  .menus ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .menus ul li {
    display: inline-block;
    margin-right: 20px;
  }
  
  .menus ul li:last-child {
    margin-right: 0;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section {
    flex: 1;
    margin-right: 20px;
  }
  
  .footer-section:last-child {
    margin-right: 0;
  }
  
  .footer-section h3 {
    margin-bottom: 10px;
  }
  
  .social-icons {
    display: flex;
  }
  
  .social-icons a {
    color: #fff;
    margin-right: 10px;
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  
  .payment-platforms img {
    max-width: 50px;
  }
  </style>
