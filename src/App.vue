<script setup>
import HomeView from './views/HomeView.vue'
import NavBar from './components/NavBar.vue'
import NewsSec from './components/NewsSec.vue'
import ServicesSec from './components/ServicesSec.vue'
import FooterBar from './components/FooterBar.vue'
import WhoWeAre from './components/WhoWeAre.vue'
import InstrSec from './components/InstrSec.vue'
import ContactUs from './components/ContactUs.vue'
</script>

<template>
  <div class="fontType">
    <NavBar />
    <WhoWeAre />
    <HomeView />
    <NewsSec />
    <ServicesSec />
    <InstrSec />
    <ContactUs />
    <FooterBar />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&display=swap');
.fontType {
  font-family: 'Almarai', sans-serif;
}
</style>
