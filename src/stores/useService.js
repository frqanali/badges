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
    servicedescription: '',
    image: '',
    pio: '',
  })

  const serviceList = ref([
    {
      id: '',
      servicetitle: '',
      servicedescription: '',
      pio: '',
    },
  ])

  const serviceId = ref(null)

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

      if (response.status === 200) {
        serviceList.value = response.data.services
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
    const payload = { serviceid: id }
    try {
      const response = await axios.get(
        apiURL + 'greenzone/get_service_by_id',
        payload,

        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      if (response.status === 200) {
        singleservice.value = response.data.service
        console.log(singleservice.value)
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
    const payload = { serviceid: id }
    try {
      const response = await axios.delete(
        apiURL + 'greenzone/delete_service',
        { data: payload },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
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


  return {
    createService,
    singleservice,
    getAllServices,
    serviceList,
    editService,
    deleteService,
  }
})
