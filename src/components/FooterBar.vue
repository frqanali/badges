<template>
  <div class="page-container">
    <div class="content-wrap">
      <!-- Your main content goes here -->
    </div>
    <footer class="footer">
      <p class="center">{{ $t('ndc') }}</p>
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
  padding: 10px 0; /* Make footer smaller by reducing padding */
  font-size: 13px; /* Adjust font size to make it smaller */
  margin-bottom: 0; /* Remove any space below the footer */
}

/* Center the text */
.center {
  text-align: center;
  color: #a8a9b2; /* Change the text color */
  font-size: 13px; /* Make the text size smaller */
  margin-bottom: 0; /* Remove the space below the text */
}
</style>
