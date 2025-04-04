<template>
  <div class="container" id="sec-2">
    <div>
      <img
        src="/src/assets/image1.png"
        class="card-img-top GzImg my-5 mx-auto d-block"
        alt="News Image 1"
      />
      <h2 class="text-center my-5 underline-text">{{ $t('whoWeAre') }}</h2>
      <p class="lead text-center mt-4">
        {{ $t('par1') }}
      </p>
      <p class="lead text-center">
        {{ $t('par2') }}
      </p>
    </div>
  </div>
</template>
<style>
.GzImg {
  max-width: 750px;
}
.underline-text {
  display: inline-block;
  position: relative;
  width: 100%; /* Ensures it takes up the full width of the parent */
  text-align: center; /* Centers the text itself */
}

.underline-text::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 10%; /* Same width as text */
  height: 3px;
  background-color: #4c7b8b;
  transform: translateX(-50%); /* Center the underline */
}
</style>
