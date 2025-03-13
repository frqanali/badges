<template>
  <div class="background">
    <footer>
      <div class="container mt-3 pt-3">
        <div class="navbar-brand p-1">{{ $t('phoneNumber') }} : 07715667876</div>
        <div class="navbar-brand p-1">{{ $t('email') }} : www.gzb@gmail.com</div>
        <div class="navbar-brand p-1">{{ $t('address') }}</div>
        <div class="navbar-brand p-1">
          {{ $t('location')
          }}<a href="https://maps.app.goo.gl/pt9D13DsBiDi7yJV9?g_st=com.google.maps.preview.copy">{{
            $t('clickhere')
          }}</a>
        </div>
      </div>
      <div class="navbar-brand p-1 center">{{ $t('ndc') }}</div>
    </footer>
  </div>
</template>
<style>
.center {
  display: flex;
  justify-content: center;
}
</style>
