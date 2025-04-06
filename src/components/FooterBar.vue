<template>
  <div class="page-container">
    <div class="content-wrap">
      <!-- Your main content goes here -->
    </div>
    <footer class="footer">
      <p class="center mt-3">{{ $t('ndc') }}</p>
    </footer>
  </div>
</template>

<style scoped>
/* Ensures the page takes the full height */
.page-container {
  display: flex;
  flex-direction: column;
}

/* Pushes the footer to the bottom */
.content-wrap {
  flex: 1;
}

/* Styles the footer */
.footer {
  background-color: #23486a;
  color: white;
  bottom: 0;
  width: 100%;
}
.center {
  text-align: center;
}
</style>
