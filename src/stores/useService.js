import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const apiURL = import.meta.env.VITE_API_URL

export const useServiceStore = defineStore('serviceStore', () => {
  const router = useRouter()
  //reactive variables
  const singleservice = ref({
    servicetitle: '',
    pio: '',
    servicedescription: '',
    image: '',
  })

  const serviceList = ref([])

  const serviceId = ref(null)

  const totalServices = ref(0)

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
          title: 'تم اضافة خدمة جديدة بنجاح',
          icon: 'success',
        })
        clearItems()
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في إضافة الخدمة',
        icon: 'error',
      })
    }
  }

  const getAllServices = async (page = 1) => {
    const payload = {
      Per_page: 5,
      page: page,
    }
    try {
      const response = await axios.post(apiURL + 'greenzone/get_all_service', payload)

      if (response.status === 200) {
        serviceList.value = response.data.services
        totalServices.value = response.data.pagination.total_items
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في جلب الخدمات',
        icon: 'error',
      })
    }
  }

  const getSingleService = async (id) => {
    try {
      const response = await axios.get(
        apiURL + 'greenzone/get_service_by_id/' + id,

        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      if (response.status === 200) {
        singleservice.value = response.data
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في جلب الخدمة',
        icon: 'error',
      })
    }
  }

  const editService = async (id) => {
    serviceId.value = id
    router.push({ name: 'addService', query: { id: id } })
    getSingleService(id)
  }

  const deleteService = async (id) => {
    try {
      const response = await axios.delete(apiURL + 'greenzone/delete_service/' + id, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.status === 200) {
        Swal.fire({
          title: 'تم حذف الخدمة بنجاح',
          icon: 'success',
        })

        // delete the service from the list
        const index = serviceList.value.findIndex((service) => service.id === id)
        if (index !== -1) {
          serviceList.value.splice(index, 1)
        }
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في حذف الخدمة',
        icon: 'error',
      })
    }
  }
  const clearItems = () => {
    singleservice.value = {
      servicetitle: '',
      pio: '',
      servicedescription: '',
      image: '',
    }

    serviceId.value = null
  }

  const setUploadedImage = (file) => {
    singleservice.value.image = file
  }

  return {
    createService,
    singleservice,
    getAllServices,
    serviceList,
    editService,
    deleteService,
    totalServices,
    getSingleService,
    setUploadedImage,
    clearItems,
  }
})
