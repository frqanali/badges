<template>
  <div class="container mt-5" id="sec-5">
    <h2 class="text-center mb-4">{{ $t('instructions') }}</h2>

    <div class="row">
      <!-- News Item 1 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="/src/assets/GzLogoFi.png"
            class="card-img-top img-fluid newsImg mt-2"
            alt="News Image 1"
            loading="lazy"
          />
          <div class="card-body">
            <h5 class="card-title">{{ $t('newstitle') }}</h5>
            <p class="card-text">
              {{ $t('newsinfo') }}
            </p>
            <a href="news-article1.html" class="btn btn-color">{{ $t('more') }}</a>
          </div>
        </div>
      </div>

      <!-- News Item 2 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="/src/assets/GzLogoFi.png"
            class="card-img-top img-fluid newsImg mt-2"
            alt="News Image 1"
            loading="lazy"
          />
          <div class="card-body">
            <h5 class="card-title">{{ $t('newstitle') }}</h5>
            <p class="card-text">
              {{ $t('newsinfo') }}
            </p>
            <a href="news-article2.html" class="btn btn-color">{{ $t('more') }}</a>
          </div>
        </div>
      </div>

      <!-- News Item 3 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="/src/assets/GzLogoFi.png"
            class="card-img-top img-fluid newsImg mt-2"
            alt="News Image 1"
            loading="lazy"
          />
          <div class="card-body">
            <h5 class="card-title">{{ $t('newstitle') }}</h5>
            <p class="card-text">
              {{ $t('newsinfo') }}
            </p>
            <a href="news-article3.html" class="btn btn-color">{{ $t('more') }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newsImg {
  max-width: 200px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
.card {
  border: 2px solid #4c7b8b;
  border-radius: 10px;
  box-shadow: #23486a;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  border-color: aliceblue;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}
</style>
