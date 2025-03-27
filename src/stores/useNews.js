import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import Swal from 'sweetalert2'

const apiURL = import.meta.env.VITE_API_URL

export const useNewsStore = defineStore('newsStore', () => {
  // Reactive variables
  const singlenews = ref({
    newstitle: '',
    newsdescription: '',
    image: 'https://exampl.com/image.jpg',
    pio: '',
  })

  // Functions
  const getAllNews = async () => {
    try {
      const response = await axios.get(apiURL + 'greenzone/get_news')
      // Await the axios call
      console.log(response)
    } catch (error) {
      console.log(error)

      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في جلب الأخبار',
        icon: 'error',
      })
    }
  }

  const createNews = async () => {
    try {
      const response = await axios.post(apiURL + 'greenzone/create_news', singlenews.value) // Await the axios call
      console.log(response)

      if (response.status === 201) {
        Swal.fire({
          title: 'تم اضافة خبر جديد بنجاح',
          icon: 'success',
        })
      }
    } catch (error) {
      console.log(error)
      // Optionally show an error alert if the request fails
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في إضافة الخبر',
        icon: 'error',
      })
    }
  }

  return {
    getAllNews,
    createNews,
    singlenews,
  }
})
