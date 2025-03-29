import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import Swal from 'sweetalert2'

const apiURL = import.meta.env.VITE_API_URL

export const useServiceStore = defineStore('serviceStore', () => {
  //reactive variables
  const singleservice = ref({
    servicetitle: '',
    servicedescription: '',
    image: '',
    pio: '',
  })
  // functions

  const createService = async () => {
    const payload = new FormData()
    // convert form fields to formData
    Object.entries(singleservice.value).forEach(([key, value]) => {
      if (value instanceof File) {
        payload.append(key, value)
      } else {
        payload.append(key, value)
      }
    })

    try {
      const response = await axios.post(apiURL + 'greenzone/create_service', payload)
      if (response.status === 201) {
        Swal.fire({
          title: 'تم اضافة خبر جديد بنجاح',
          icon: 'success',
        })
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في إضافة الخبر',
        icon: 'error',
      })
    }
  }

  const getAllServices = async () => {
    try {
      const response = await axios.get(apiURL + 'greenzone/get_all_service')

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
  const setUploadedImage = (file) => {
    singleservice.value.image = file
  }
  return {
    createService,
    singleservice,
    setUploadedImage,
    getAllServices,
  }
})
