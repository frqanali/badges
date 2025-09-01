<template>
  <div>
    <loader v-if="newsStore.loader" />
  </div>
  <div class="row">
    <div class="container mt-5">
      <div class="col-4 col-sm-6 col-md-12">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <h1>اهلا بعودتك {{ authStore.userInfo }}</h1>

          <h2 v-if="newsStore.visitorCount !== null" class="mt-3">
            عدد الزوار الكلي: {{ newsStore.visitorCount }} <br />
            عدد الزوار اليوم: {{ newsStore.todayVisitorCount }}
          </h2>
          <button type="button" class="btn btn-color btn-lg mt-3" @click="newsStore.viewPdf()">
            تحميل الملف
          </button>
        </div>
        <!-- Chart Canvas -->
        <canvas ref="visitorChart" width="200" height="50" class="mt-5"></canvas>

        <div class="card mt-5 shadow-lg">
          <canvas ref="dailyChart" width="200" height="50" class="mt-5"></canvas>
        </div>

        <hr />
        <div class="d-flex flex-column align-items-center justify-content-center">
          <h1>احصائيات الخدمات</h1>
          <h2>تحميل ملف عدد زيارات الخدمات</h2>
        </div>
        <ul class="">
          <li>
            1-استمارة تسجيل المنطقة الخضراء
            <button class="btn btn-color btn-sm" @click="downloadPdf(1)">تحميل الملف</button>
          </li>
          <li>
            2- الاستمارة الامنية لاصدار هويات المنطقة الخضراء
            <button class="btn btn-color btn-sm" @click="downloadPdf(2)">تحميل الملف</button>
          </li>
          <li>
            3- استمارة الموافقات الخاصة
            <button class="btn btn-color btn-sm" @click="downloadPdf(3)">تحميل الملف</button>
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

import Loader from '../components/loader.vue'
import axios from 'axios'

// stores
const authStore = useAuthStore()
const newsStore = useNewsStore()

//const visitorChart = ref(null)
const dailyChart = ref(null)

// download services pdf (remember we need to move this to the statistics page later)
const downloadPdf = async (id) => {
  const payload = {
    service_id: id,
  }
  try {
    const response = await axios.post(apiURL + 'greenzone/service-stats/autopdf', payload, {
      headers: {
        headers: { Authorization: `Bearer ${authStore.token}` },
      },
    })

    console.log(response)
  } catch (error) {
    console.log(error)
  }
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
