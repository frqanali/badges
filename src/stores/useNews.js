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
    image: '',
    pio: '',
  })

  // Functions
  const getAllNews = async () => {
    try {
      const response = await axios.get(apiURL + 'greenzone/get_all_news')

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
    const payload = new FormData()
    // convert form fields to formData
    Object.entries(singlenews.value).forEach(([key, value]) => {
      if (value instanceof File) {
        payload.append(key, value)
      } else {
        payload.append(key, value)
      }
    })
    console.log(payload)
    try {
      const response = await axios.post(apiURL + 'greenzone/create_news', payload)
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

  // set the image to the state
  const setUploadedImage = (file) => {
    singlenews.value.image = file
  }

  return {
    getAllNews,
    createNews,
    singlenews,
    setUploadedImage,
  }
})
