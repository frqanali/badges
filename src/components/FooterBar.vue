<template>
  <div class="page-container">
    <div class="content-wrap">
      <!-- Your main content goes here -->
    </div>
    <footer class="footer">
      <div class="container mt-3">
        <p>{{ $t('phoneNumber') }}: 12345678911</p>
        <p>{{ $t('email') }}: gzb@gmail.com</p>
        <p>{{ $t('address') }}</p>

        <p>
          {{ $t('location') }}
          <a href="https://maps.app.goo.gl/pt9D13DsBiDi7yJV9?g_st=com.google.maps.preview.copy">
            {{ $t('clickhere') }}
          </a>
        </p>
      </div>
      <p class="center">{{ $t('ndc') }}</p>
    </footer>
  </div>
</template>

<style scoped>
/* Ensures the page takes the full height */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 40vh;
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
