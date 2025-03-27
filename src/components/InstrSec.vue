<template>
  <div class="d-flex align-items-center p-4">
    <div class="container p-4">
      <h2 class="text-center mb-4">{{ $t('instructions') }}</h2>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100 p-3">
            <div class="card-body">
              <h5 class="card-title">ضوابط وتعليمات منح هويات للقطاع الخاص</h5>
            </div>
            <button type="button" class="btn btn-color mb-3" @click="handleSubmit">
              {{ $t('more') }}
            </button>

            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 p-3">
            <div class="card-body">
              <h5 class="card-title">استيفاء رسوم القطاع العام والخاص وساكني المنطقة الخضراء</h5>
            </div>
            <button type="button" class="btn btn-color mb-3">{{ $t('more') }}</button>

            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 p-3">
            <div class="card-body">
              <h5 class="card-title">الحقوق والامتيازات والصلاحيات</h5>
            </div>
            <button type="button" class="btn btn-color mb-3">{{ $t('more') }}</button>

            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 p-3">
            <div class="card-body">
              <h5 class="card-title">ضوابط وتعليمات القطاع العام وموظفي الدولة</h5>
            </div>
            <button type="button" class="btn btn-color mb-3">{{ $t('more') }}</button>

            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleSubmit = () => {
  router.push('/instruction')
}
</script>

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
