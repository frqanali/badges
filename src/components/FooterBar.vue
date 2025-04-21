<template>
  <div class="page-container">
    <div class="content-wrap">
      <!-- Your main content goes here -->
    </div>
    <footer class="footer">
      <p class="center">
        {{ $t('ndc') }}
        <i class="bi bi-c-circle"></i>
      </p>
    </footer>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 1vh; /* Full height of viewport */
  display: flex;
  flex-direction: column;
}

.content-wrap {
  flex: 1;
}

.footer {
  background-color: #23486a;
  color: white;
  padding: 10px 0;
  font-size: 13px;
  margin-top: auto; /* Push footer down */
  width: 100%;
}

/* Center the text */
.center {
  text-align: center;
  color: #a8a9b2; /* Change the text color */
  font-size: 13px; /* Make the text size smaller */
  margin-bottom: 0; /* Remove the space below the text */
}
</style>
