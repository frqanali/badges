<template>
  <div class="container" id="sec-2">
    <div>
      <img
        src="/src/assets/image1.png"
        class="card-img-top GzImg my-5 mx-auto d-block"
        alt="News Image 1"
      />
      <h2 class="text-center mb-4 my-5">{{ $t('whoWeAre') }}</h2>
      <p class="lead text-center">
        {{ $t('par1') }}
      </p>
      <p class="lead text-center">
        {{ $t('par2') }}
      </p>
      <p class="lead text-center">
        {{ $t('par3') }}
      </p>
    </div>
  </div>
</template>
<style>
.GzImg {
  max-width: 700px;
}
</style>
