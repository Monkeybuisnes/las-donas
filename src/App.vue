<template>
  <div id="app">
    <Banner />
    <Header  /> 
    <CategoriesMenu />
    <HeroSection />
    <ProductSlider />
    <Portfolio />
    <Testimonials />
    <CallToAction2 />
    <Social />
    <Footer />
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import Header from './components/Header.vue';
import CategoriesMenu from './components/CategoriesMenu.vue';
import HeroSection from './components/HeroSection.vue';
import ProductSlider from './components/ProductSlider.vue';
import Portfolio from './components/Portfolio.vue';
import Testimonials from './components/Testimonials.vue';
import CallToAction2 from './components/CallToAction2.vue';
import Social from './components/Social.vue';
import Footer from './components/Footer.vue';
import '@fortawesome/fontawesome-free/css/all.css'


export default {
  name: 'App',
  components: {
    Banner,
    Header,
    CategoriesMenu,
    HeroSection,
    CallToAction,
    ProductSlider,
    Portfolio,
    Testimonials,
    CallToAction2,
    Social,
    Footer
  }
}
</script>

<style>
/* Add global styles here */
</style>
