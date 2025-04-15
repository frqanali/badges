<template>
  <div class="loader-overlay">
    <div class="spinner-outer"></div>
    <div class="spinner-inner"></div>
    <img
      src="/src/assets/GzLogoFi.png"
      alt="Logo"
      width="200"
      height="200"
      loading="lazy"
      class="logo-img"
    />
  </div>
</template>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1); /* Transparent white */
  backdrop-filter: blur(12px); /* Blur behind it */
  -webkit-backdrop-filter: blur(12px); /* For Safari */
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-outer,
.spinner-inner {
  position: absolute;
  border: 3px solid transparent;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

.spinner-outer {
  width: 280px;
  height: 280px;
  border-top-color: #0d6efd;
  z-index: 1;
}

.spinner-inner {
  width: 240px;
  height: 240px;
  border-bottom-color: #198754;
  animation-duration: 1.5s;
  z-index: 2;
}

.logo-img {
  z-index: 3;
  position: absolute;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
