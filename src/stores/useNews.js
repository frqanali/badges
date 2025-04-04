import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const apiURL = import.meta.env.VITE_API_URL

export const useNewsStore = defineStore('newsStore', () => {
  const router = useRouter()
  // Reactive variables
  const singlenews = ref({
    newstitle: '',
    newsdescription: '',
    image: '',
    pio: '',
  })

  const threeNewsList = ref([])

  const newsList = ref([])

  const newsId = ref(null)

  const totalNews = ref(0)

  // Functions
  const getAllNews = async (page = 1) => {
    const payload = {
      Per_Page: 5,
      page: page,
    }
    try {
      const response = await axios.post(apiURL + 'greenzone/get_all_news', payload)

      if (response.status === 200) {
        newsList.value = response.data.news
        totalNews.value = response.data.pagination.total_items
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في جلب الأخبار',
        icon: 'error',
      })
    }
  }

  const deleteNews = async (id) => {
    try {
      const response = await axios.delete(
        apiURL + 'greenzone/delete_news/' + id,

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
        clearItems()
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

  const getSingleNews = async (id) => {
    try {
      const response = await axios.get(apiURL + 'greenzone/getnews_by_id/' + id)
      if (response.status == 200) {
        singlenews.value.newstitle = response.data.title
        singlenews.value.newsdescription = response.data.description
        singlenews.value.pio = response.data.pio
        singlenews.value.image = `data:image/png;base64,${response.data.image}`
      }
    } catch (error) {
      console.log(error)
    }
  }

  const routerEditNews = (id) => {
    getSingleNews(id)
    newsId.value = id
    router.push('/addNews')
  }

  const editNews = async () => {
    const payload = new FormData()
    Object.entries(singlenews.value).forEach(([key, value]) => {
      if (value instanceof File) {
        payload.append(key, value)
      } else {
        payload.append(key, value)
      }
    })

    try {
      const response = await axios.put(apiURL + 'greenzone/news_update/' + newsId.value, payload)
      if (response.status == 200) {
        Swal.fire({
          title: 'تم تعديل الخبر بنجاح',
          icon: 'success',
        })
        clearItems()
        router.push('/allNews')
      }
    } catch (error) {
      Swal.fire({
        title: 'لم يتم تعديل الخبر ',
        icon: 'error',
      })
    }
  }

  const pinNews = async (id, flag) => {
    const payload = {
      newsid: id,
      flag: flag,
    }
    try {
      const response = await axios.put(apiURL + 'greenzone/flag_update', payload)
      if (flag) {
        if (response.status === 200) {
          Swal.fire({
            title: 'تم تثبيت الخبر بنجاح',
            icon: 'success',
          })
          const index = newsList.value.findIndex((news) => news.id === id)
          if (index != -1) {
            newsList.value[index].flag = true
          }
        }
      } else {
        if (response.status === 200) {
          Swal.fire({
            title: 'تم  الغاء تثبيت الخبر بنجاح',
            icon: 'success',
          })
          const index = newsList.value.findIndex((news) => news.id === id)
          if (index != -1) {
            newsList.value[index].flag = false
          }
        }
      }
    } catch (error) {
      Swal.fire({
        title: 'لم يتم تثبيت الخبر ',
        icon: 'error',
      })
    }
  }

  const threeNews = async () => {
    try {
      const response = await axios.get(apiURL + 'greenzone/get_latest_4_news')

      if (response.status === 200) {
        threeNewsList.value = response.data.news.slice(0, 3)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getPinnedNews = async () => {
    const payload = {
      flag: true,
    }

    try {
      const response = await axios.get(apiURL + 'greenzone/get_news_by_flag', { params: payload })
      if (response.status === 200) {
        newsList.value = response.data.news
      }
    } catch (error) {
      console.log(error)
    }
  }

  // clear the forms
  const clearItems = () => {
    singlenews.value = {
      newstitle: '',
      newsdescription: '',
      image: '',
      pio: '',
    }

    newsId.value = null
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
    totalNews,
    routerEditNews,
    editNews,
    clearItems,
    pinNews,
    getSingleNews,
    threeNews,
    threeNewsList,
    getPinnedNews,
  }
})
