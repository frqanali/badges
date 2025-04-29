<template>
  <div class="d-flex flex-column align-items-center text-center">
    <h1>اهلا بعودتك {{ authStore.userInfo }}</h1>

    <h2 v-if="newsStore.visitorCount !== null" class="mt-3">
      عدد الزوار الكلي: {{ newsStore.visitorCount }} <br />
      عدد الزوار اليوم: {{ newsStore.todayVisitorCount }}
    </h2>

    <!-- Chart Canvas -->
    <canvas ref="visitorChart" width="300" height="100" class="mt-5"></canvas>
    <canvas ref="dailyChart" width="300" height="100" class="mt-5"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/useAuth'
import { useNewsStore } from '@/stores/useNews'
import { Chart } from 'chart.js/auto'

// stores
const authStore = useAuthStore()
const newsStore = useNewsStore()

const visitorChart = ref(null)
const dailyChart = ref(null)

onMounted(async () => {
  await newsStore.getDailyVisit()
  if (visitorChart.value) {
    new Chart(visitorChart.value, {
      type: 'bar',
      data: {
        labels: ['عدد الزوار الكلي', 'عدد الزوار اليوم'],
        datasets: [
          {
            label: 'عدد الزوار',
            data: [newsStore.visitorCount, newsStore.todayVisitorCount],
            backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
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
  if (dailyChart.value && newsStore.dailyCountList.length > 0) {
    new Chart(dailyChart.value, {
      type: 'bar',
      data: {
        labels: newsStore.dailyCountList.map((item) => item.date), // Dates for X-axis
        datasets: [
          {
            label: 'عدد الزيارات اليومية',
            data: newsStore.dailyCountList.map((item) => item.visits), // Visits for Y-axis
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
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
