import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL

export const useAurthStore = defineStore('auth', () => {
  const router = useRouter()

  // user login
  const login = async (user) => {
    try {
      const response = await axios.post(apiURL + '/auth/login', user)
      console.log(response)
    } catch (error) {
      console.log('error', error)
    }
  }

  return {
    login,
  }
})
