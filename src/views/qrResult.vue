<template>
  <div class="qr-result-card">
    <h2>📌 بيانات QR</h2>
    <p><strong>رقم الحفظ:</strong> {{ saveNumber }}</p>
    <p><strong>الاسم:</strong> {{ name }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const saveNumber = route.query.saveNumber || 'غير معروف'
const name = route.query.name || 'غير معروف'
</script>

<style scoped>
.qr-result-card {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  font-size: 18px;
}
</style>
