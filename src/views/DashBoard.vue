<template>
  <div>
    <loader v-if="newsStore.loader" />
  </div>

  <div class="container py-4" dir="rtl">
    <div class="row justify-content-center text-center">
      <div class="col-12 col-lg-10">
        <h1 class="h3 h2-md">اهلا بعودتك {{ authStore.userInfo }}</h1>

        <h2 v-if="newsStore.visitorCount !== null" class="h5 h4-md mt-3">
          عدد الزوار الكلي: {{ newsStore.visitorCount }} <br />
          عدد الزوار اليوم: {{ newsStore.todayVisitorCount }}
        </h2>
      </div>
    </div>

    <div class="row justify-content-center mt-4">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="row g-3 align-items-center">
          <div class="col-12 col-md-6 d-flex align-items-center">
            <label for="fromDate" class="fw-bold me-2 label-md-w text-md-end mb-1 mb-md-0">
              من تاريخ:
            </label>
            <input
              id="fromDate"
              v-model="fromDate"
              type="date"
              class="form-control flex-grow-1"
              placeholder="من تاريخ"
            />
          </div>

          <div class="col-12 col-md-6 d-flex align-items-center">
            <label for="toDate" class="fw-bold me-2 label-md-w text-md-end mb-1 mb-md-0">
              إلى تاريخ:
            </label>
            <input
              id="toDate"
              v-model="toDate"
              type="date"
              class="form-control flex-grow-1"
              placeholder="إلى تاريخ"
            />
          </div>

          <div class="col-12 d-grid d-md-flex justify-content-md-center">
            <button
              type="button"
              class="btn btn-color btn-lg mt-2 mt-md-3 w-100 w-md-auto"
              @click="handleDownload"
            >
              تحميل ملف الاحصائيات
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts -->
    <div class="row justify-content-center mt-4 col-12 col-lg-12">
      <!-- <div class="card shadow-sm p-3 mb-4 chart-container"><canvas ref="visitorChart"></canvas></div> -->
      <div class="card shadow-sm p-3 justify-content-center chart-container">
        <canvas ref="dailyChart"></canvas>
      </div>
    </div>

    <hr class="my-4" />

    <div class="row justify-content-center text-center">
      <div class="col-12 col-lg-8">
        <h1 class="h4">احصائيات الخدمات</h1>
        <h2 class="h6 text-muted mb-3">تحميل ملف عدد زيارات الخدمات</h2>

        <ul class="list-group text-start">
          <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <span>1- استمارة تسجيل المنطقة الخضراء</span>
            <button class="btn btn-color btn-sm mt-2 mt-sm-0" @click="downloadPdf(1)">
              تحميل الملف
            </button>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <span>2- الاستمارة الامنية لاصدار هويات المنطقة الخضراء</span>
            <button class="btn btn-color btn-sm mt-2 mt-sm-0" @click="downloadPdf(2)">
              تحميل الملف
            </button>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <span>3- استمارة الموافقات الخاصة</span>
            <button class="btn btn-color btn-sm mt-2 mt-sm-0" @click="downloadPdf(3)">
              تحميل الملف
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const apiURL = import.meta.env.VITE_API_URL
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/useAuth'
import { useNewsStore } from '@/stores/useNews'
import { Chart } from 'chart.js/auto'
import Swal from 'sweetalert2'

import Loader from '../components/loader.vue'
import axios from 'axios'

// stores
const authStore = useAuthStore()
const newsStore = useNewsStore()

//const visitorChart = ref(null)
const dailyChart = ref(null)
const fromDate = ref('')
const toDate = ref('')

// download services pdf (remember we need to move this to the statistics page later)
const downloadPdf = async (id) => {
  const payload = {
    service_id: id,
  }
  try {
    const response = await axios.post(apiURL + 'greenzone/service-stats/autopdf', payload, {
      headers: { Authorization: `Bearer ${authStore.token}` },
    })

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const handleDownload = () => {
  if (!fromDate.value || !toDate.value) {
    return Swal.fire({
      title: 'تنبيه',
      text: 'الرجاء اختيار التاريخ من وإلى أولاً',
      icon: 'warning',
    })
  }
  if (fromDate.value > toDate.value) {
    return Swal.fire({
      title: 'تنبيه',
      text: 'تاريخ البداية أكبر من تاريخ النهاية',
      icon: 'warning',
    })
  }
  newsStore.viewPdf(fromDate.value, toDate.value)
}

onMounted(async () => {
  await newsStore.getDailyVisit()
  newsStore.sendIpToApi()

  if (newsStore.zeroCount) {
    await newsStore.sendIpToApi()
  }

  // if (
  //   visitorChart.value &&
  //   newsStore.visitorCount !== null &&
  //   newsStore.todayVisitorCount !== null
  // ) {
  //   new Chart(visitorChart.value, {
  //     type: 'bar',
  //     data: {
  //       labels: ['عدد الزوار الكلي', 'عدد الزوار اليوم'],
  //       datasets: [
  //         {
  //           label: 'عدد الزوار',
  //           data: [newsStore.visitorCount, newsStore.todayVisitorCount],
  //           backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'],
  //           borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       responsive: true,
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   })
  // }
  if (dailyChart.value && newsStore.dailyCountList.length > 0) {
    const recentSeven = newsStore.dailyCountList.slice(-7)

    new Chart(dailyChart.value, {
      type: 'bar',
      data: {
        labels: recentSeven.map((item) => item.date), // Dates for X-axis
        datasets: [
          {
            label: 'عدد الزيارات اليومية',
            data: recentSeven.map((item) => item.daily_visits), // Visits for Y-axis
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)', // Red
              'rgba(54, 162, 235, 0.5)', // Blue
              'rgba(255, 206, 86, 0.5)', // Yellow
              'rgba(75, 192, 192, 0.5)', // Teal
              'rgba(153, 102, 255, 0.5)', // Purple
              'rgba(255, 159, 64, 0.5)', // Orange
              'rgba(100, 255, 218, 0.5)', // Aqua
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(100, 255, 218, 1)',
            ],

            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
  }
})
</script>
<style>
@media (min-width: 768px) {
  .label-md-w {
    width: 120px;
  }
}
.chart-container {
  position: relative;
  height: 280px; /* mobile height */
}
@media (min-width: 768px) {
  .chart-container {
    height: 380px;
    width: 700px;
  } /* bigger on md+ */
}
@media (min-width: 768px) {
  .h2-md {
    font-size: 2rem;
  }
  .h4-md {
    font-size: 1.5rem;
  }
}
</style>
