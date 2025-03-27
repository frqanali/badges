<template>
  <div class="container mt-5" id="sec-3">
    <h2 class="text-center mb-4">{{ $t('news') }}</h2>

    <div class="col">
      <!-- News pinned item -->
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active mb-4">
            <div class="card">
              <div class="row">
                <div class="col my-5 px-5 mx-5">
                  <div class="card-body">
                    <h5 class="card-title fs-3">
                      مكتب هويات المنطقة الخضراء يباشر أعماله في مقراته الجديدة
                    </h5>
                    <p class="card-text fs-5">
                      في إطار تنفيذ توجيهات السيد مدير المكتب، وضمن خطة تطوير البنى التحتية لمكتب
                      هويات المنطقة الخضراء، تم إغلاق المقر السابق والانتقال إلى موقعين جديدين بصورة
                      مؤقتة، وذلك لغرض إعادة بناء المقر السابق وفق أعلى معايير التطور والحداثة
                    </p>
                    <a href="news-article1.html" class="btn btn-color btn-lg">{{ $t('more') }}</a>
                  </div>
                </div>

                <div class="col-md-6 d-flex my-5">
                  <img
                    src="/src/assets/GzLogoFi.png"
                    class="card-img-top img-fluid newsImg mt-2"
                    alt="News Image 1"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mb-4">
            <div class="card">
              <div class="row">
                <div class="col my-5 px-5 mx-5">
                  <div class="card-body">
                    <h5 class="card-title fs-3">
                      مكتب هويات المنطقة الخضراء يطلق الاستمارة الإلكترونية الجديدة بالتعاون مع مركز
                      البيانات الوطني
                    </h5>
                    <p class="card-text fs-5">
                      في إطار تبسيط الإجراءات وتطوير الخدمات المقدمة، يعلن مكتب هويات المنطقة
                      الخضراء عن إطلاق الاستمارة الإلكترونية الجديدة الخاصة بإصدار وتجديد هويات
                      الدخول إلى المنطقة الخضراء، وذلك بالتعاون مع مركز البيانات الوطني التابع
                      للأمانة العامة لمجلس الوزراء، عبر منصة أور للخدمات الإلكترونية.
                    </p>
                    <a href="news-article1.html" class="btn btn-color btn-lg">{{ $t('more') }}</a>
                  </div>
                </div>

                <div class="col-md-6 d-flex my-5">
                  <img
                    src="/src/assets/GzLogoFi.png"
                    class="card-img-top img-fluid newsImg mt-2"
                    alt="News Image 1"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mb-4">
            <div class="card">
              <div class="row">
                <div class="col my-5 px-5 mx-5">
                  <div class="card-body">
                    <h5 class="card-title fs-3">
                      مكتب هويات المنطقة الخضراء يعلن عن إطلاق الاستمارة الأمنية الإلكترونية الجديدة
                      بالتعاون مع مركز البيانات الوطني
                    </h5>
                    <p class="card-text fs-5">
                      ضمن مساعي مكتب هويات المنطقة الخضراء لتطوير آليات العمل وتعزيز الإجراءات
                      الأمنية، تم إطلاق الاستمارة الأمنية الإلكترونية الجديدة، والتي يتوجب على جميع
                      المراجعين تعبئتها قبل الحضور إلى المكتب لاستكمال إجراءات المقابلة الأمنية
                    </p>
                    <a href="news-article1.html" class="btn btn-color btn-lg">{{ $t('more') }}</a>
                  </div>
                </div>

                <div class="col-md-6 d-flex my-5">
                  <img
                    src="/src/assets/GzLogoFi.png"
                    class="card-img-top img-fluid newsImg mt-2"
                    alt="News Image 1"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            class="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            class="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </button>
      </div>

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
              <h5 class="card-title">مكتب هويات المنطقة الخضراء يباشر أعماله في مقراته الجديدة</h5>
              <p class="card-text">
                في إطار تنفيذ توجيهات السيد مدير المكتب، وضمن خطة تطوير البنى التحتية لمكتب هويات
                المنطقة الخضراء، تم إغلاق المقر السابق والانتقال إلى موقعين جديدين بصورة مؤقتة، وذلك
                لغرض إعادة بناء المقر السابق وفق أعلى معايير التطور والحداثة.
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
              <h5 class="card-title">
                مكتب هويات المنطقة الخضراء يطلق الاستمارة الإلكترونية الجديدة بالتعاون مع مركز
                البيانات الوطني
              </h5>
              <p class="card-text">
                في إطار تبسيط الإجراءات وتطوير الخدمات المقدمة، يعلن مكتب هويات المنطقة الخضراء عن
                إطلاق الاستمارة الإلكترونية الجديدة الخاصة بإصدار وتجديد هويات الدخول إلى المنطقة
                الخضراء، وذلك بالتعاون مع مركز البيانات الوطني التابع للأمانة العامة لمجلس الوزراء،
                عبر منصة أور للخدمات الإلكترونية.
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
              <h5 class="card-title">
                مكتب هويات المنطقة الخضراء يعلن عن إطلاق الاستمارة الأمنية الإلكترونية الجديدة
                بالتعاون مع مركز البيانات الوطني
              </h5>
              <p class="card-text">
                ضمن مساعي مكتب هويات المنطقة الخضراء لتطوير آليات العمل وتعزيز الإجراءات الأمنية، تم
                إطلاق الاستمارة الأمنية الإلكترونية الجديدة، والتي يتوجب على جميع المراجعين تعبئتها
                قبل الحضور إلى المكتب لاستكمال إجراءات المقابلة الأمنية.
              </p>
              <a href="news-article3.html" class="btn btn-color">{{ $t('more') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 100%; /* Ensures uniform height */
  min-height: 450px; /* Adjust as needed */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #4c7b8b;
  border-radius: 10px;
  box-shadow: #23486a;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card-body {
  flex-grow: 1; /* Allows the text content to fill the available space */
}

.newsImg {
  max-width: 200px;
  height: 200px; /* Ensures images are the same height */
  object-fit: cover; /* Prevents image distortion */
  margin: auto;
}

.btn-color {
  color: aliceblue;
  background-color: #23486a;
}

.carousel-control-prev,
.carousel-control-next {
  width: 80px;
  display: flex;
  justify-content: center;
}
</style>
