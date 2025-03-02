<template>
  <div class="container mt-5" id="sec-4">
    <h2 class="text-center mb-4">{{ $t('services') }}</h2>
    <div class="row g-3 justify-content-center">
      <div class="col-md-6 me-6 ms-6">
        <div class="card cards backgrounds">
          <div class="card-body">
            <h5 class="card-title">{{ $t('servicename') }}</h5>
            <p class="card-text">
              {{ $t('info') }}
            </p>
            <a href="#" class="btn btn-color"> {{ $t('go') }} </a>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4 me-6 ms-6">
        <div class="card cards backgrounds">
          <div class="card-body">
            <h5 class="card-title">{{ $t('servicename') }}</h5>
            <p class="card-text">
              {{ $t('info') }}
            </p>
            <a href="#" class="btn btn-color">{{ $t('go') }} </a>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4 me-6 ms-6">
        <div class="card cards backgrounds">
          <div class="card-body">
            <h5 class="card-title">{{ $t('servicename') }}</h5>
            <p class="card-text">
              {{ $t('info') }}
            </p>
            <a href="#" class="btn btn-color"> {{ $t('go') }} </a>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-4 me-6 ms-6">
        <div class="card cards backgrounds">
          <div class="card-body">
            <h5 class="card-title">{{ $t('servicename') }}</h5>
            <p class="card-text">
              {{ $t('info') }}
            </p>
            <a href="#" class="btn btn-color">{{ $t('go') }}</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4 me-6 ms-6">
        <div class="card cards backgrounds">
          <div class="card-body">
            <h5 class="card-title">{{ $t('servicename') }}</h5>
            <p class="card-text">
              {{ $t('info') }}
            </p>
            <a href="#" class="btn btn-color">{{ $t('go') }}</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4 me-6 ms-6">
        <div class="card cards backgrounds">
          <div class="card-body">
            <h5 class="card-title">{{ $t('servicename') }}</h5>
            <p class="card-text">
              {{ $t('info') }}
            </p>
            <a href="#" class="btn btn-color">{{ $t('go') }} </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.btn-color {
  color: aliceblue;
  background-color: #3b6790;
}
.backgrounds {
  background: #f5f7f8;
  border: 2px solid #e8eaeb;
}
.cards {
  border: 2px solid #e8eaeb;
  border-radius: 10px;
  box-shadow: #e8eaeb;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.cards:hover {
  border-color: #3b6790;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transform: scale(1);
}
</style>
