import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

const apiURL = import.meta.env.VITE_API_URL

export const useServiceStore = defineStore('serviceStore', () => {
  //reactive variables
  const singleservice = ref({
    servicetitle: '',
    servicedescription: '',
    image: 'https://exampl.com/image.jpg',
    pio: '',
  })
  // functions

  const createService = () => {
    try {
      const response = axios.post(apiURL + 'greenzone/create_service', singleservice.value)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    createService,
    singleservice,
  }
})
