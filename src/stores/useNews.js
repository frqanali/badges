import { defineStore } from 'pinia'
import axios from 'axios'
import { computed, ref } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useAuthStore } from './useAuth'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const imageInput = ref(null) // Reference to the file input

const apiURL = import.meta.env.VITE_API_URL
const visitorCount = ref('') // 👈 ADD this
const todayVisitorCount = ref('') // 👈 ADD this

export const useNewsStore = defineStore('newsStore', () => {
  // stores @ route
  const useAuth = useAuthStore()
  const router = useRouter()
  // Reactive variables
  const singlenews = ref({
    newstitle: '',
    newsdescription: '',
    image: '',
    pio: '',
    newstitle_en: '',
    newsdescription_en: '',
    pio_en: '',
  })

  const loader = ref(false)

  const rules = computed(() => {
    return {
      newstitle: { required },
      newsdescription: { required },
      newstitle_en: { required },
      newsdescription_en: { required },
      pio: { required },
      pio_en: { required },
    }
  })

  const v$ = useVuelidate(rules, singlenews)

  const threeNewsList = ref([])

  const newsList = ref([])
  const pinnedNewsList = ref([])

  const newsId = ref(null)

  const totalNews = ref(0)

  const imagePreview = ref(null)
  let reader = new FileReader()

  // Functions
  const getAllNews = async (page = 1) => {
    const payload = {
      Per_Page: 5,
      page: page,
    }
    try {
      loader.value = true
      const response = await axios.post(apiURL + 'greenzone/get_all_news', payload)

      if (response.status === 200) {
        loader.value = false

        newsList.value = response.data.news
        totalNews.value = response.data.pagination.total_items
      }
    } catch (error) {
      loader.value = false

      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في جلب الأخبار',
        icon: 'error',
      })
    }
  }

  const deleteNews = async (id) => {
    try {
      loader.value = true

      const response = await axios.delete(
        apiURL + 'greenzone/delete_news/' + id,

        {
          headers: { Authorization: `Bearer ${useAuth.token}` },
        },
      )
      if (response.status === 200) {
        loader.value = false

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
      loader.value = false

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
      loader.value = true

      const response = await axios.post(apiURL + 'greenzone/create_news', payload, {
        headers: { Authorization: `Bearer ${useAuth.token}` },
      })

      if (response.status === 201) {
        loader.value = false

        Swal.fire({
          title: 'تم اضافة خبر جديد بنجاح',
          icon: 'success',
        })
        clearItems()
      }
    } catch (error) {
      loader.value = false

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
      loader.value = true

      const response = await axios.get(apiURL + 'greenzone/getnews_by_id/' + id)
      if (response.status == 200) {
        loader.value = false

        singlenews.value.newstitle = response.data.title
        singlenews.value.newsdescription = response.data.description
        singlenews.value.pio = response.data.pio
        singlenews.value.image = response.data.image
          ? `data:image/png;base64,${response.data.image}`
          : response.data.image
        singlenews.value.newstitle_en = response.data.title_en
        singlenews.value.newsdescription_en = response.data.description_en
        singlenews.value.pio_en = response.data.pio_en
      }
    } catch (error) {
      loader.value = false

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
      loader.value = true

      const response = await axios.put(apiURL + 'greenzone/news_update/' + newsId.value, payload, {
        headers: { Authorization: `Bearer ${useAuth.token}` },
      })
      if (response.status == 200) {
        loader.value = false

        Swal.fire({
          title: 'تم تعديل الخبر بنجاح',
          icon: 'success',
        })
        clearItems()
        router.push('/allNews')
      }
    } catch (error) {
      loader.value = false

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
      loader.value = true

      const response = await axios.put(apiURL + 'greenzone/flag_update', payload, {
        headers: { Authorization: `Bearer ${useAuth.token}` },
      })
      if (flag) {
        if (response.status === 200) {
          loader.value = false

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
          loader.value = false

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
      loader.value = false

      Swal.fire({
        title: 'لم يتم تثبيت الخبر ',
        icon: 'error',
      })
    }
  }

  const threeNews = async () => {
    try {
      loader.value = true

      const response = await axios.get(apiURL + 'greenzone/get_latest_4_news')

      if (response.status === 200) {
        loader.value = false

        threeNewsList.value = response.data.news.slice(0, 3)
      }
    } catch (error) {
      loader.value = false

      console.log(error)
    }
  }

  const getPinnedNews = async () => {
    const payload = {
      flag: true,
    }

    try {
      loader.value = true

      const response = await axios.post(apiURL + 'greenzone/get_news_by_flag', payload)
      console.log(response)
      if (response.status === 200) {
        loader.value = false

        pinnedNewsList.value = response.data
      }
    } catch (error) {
      loader.value = false

      console.log(error)
    }
  }

  // clear the forms
  const clearItems = () => {
    singlenews.value = {
      newstitle: '',
      newsdescription: '',
      image: '', // Reset the image property
      pio: '',
      newstitle_en: '',
      newsdescription_en: '',
      pio_en: '',
    }

    newsId.value = null
    imagePreview.value = null
    reader = null
    v$.value.$reset()
  }

  // set the image to the state
  const setUploadedImage = (file) => {
    singlenews.value.image = file
  }
  const getUserIp = async () => {
    try {
      const response = await axios.get('https://ipapi.co/json/') // Get IP from external service
      return response.data.ip
    } catch (error) {
      console.error('Error getting IP:', error)
      return null
    }
  }

  const sendIpToApi = async () => {
    const ip_address = await getUserIp()
    console.log(ip_address)

    if (!ip_address) {
      console.warn('No IP available, skipping send.')
      return
    }

    try {
      const response = await axios.post(apiURL + 'greenzone/visit', { ip_address }) // Send IP to your API
      console.log('Visitor Count:', response.data)

      visitorCount.value = response.data.total_visits
      todayVisitorCount.value = response.data.today_visits

      console.log(visitorCount.value, 'jjjjj')
      // visitorCount.value = response.data.today_visits
    } catch (error) {
      console.error('Error sending IP:', error)
    }
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
    imagePreview,
    reader,
    pinnedNewsList,
    imageInput,
    v$,
    loader,
    getUserIp,
    sendIpToApi,
    visitorCount, // 👈 Add this
    todayVisitorCount,
  }
})
