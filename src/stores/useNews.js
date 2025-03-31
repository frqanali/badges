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

  const newsList = ref([
    {
      id: '',
      newstitle: '',
      newsdescription: '',
      pio: '',
    },
  ])

  const newsId = ref(null)

  // Functions
  const getAllNews = async () => {
    try {
      const response = await axios.get(apiURL + 'greenzone/get_all_news')

      if (response.status === 200) {
        newsList.value = response.data.news
      }
    } catch (error) {
      console.log(error)

      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في جلب الأخبار',
        icon: 'error',
      })
    }
  }

  const deleteNews = async (id) => {
    const payload = { news_id: id }
    try {
      const response = await axios.delete(
        apiURL + 'greenzone/delete_news',
        { data: payload },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      if (response.status === 200) {
        Swal.fire({
          title: 'تم حذف الخبر بنجاح',
          icon: 'success',
        })

        // delete the news from the list
        const index = newsList.value.findIndex((news) => news.id === id)
        if (index !== -1) {
          newsList.value.splice(index, 1)
        }
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في حذف الخبر',
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

    try {
      const response = await axios.post(apiURL + 'greenzone/create_news', payload)

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
    newsList,
    newsId,
    deleteNews,
  }
})
