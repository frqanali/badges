import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const apiURL = import.meta.env.VITE_API_URL

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const userInfo = ref(null)
  const token = ref(null)

  // user login
  const login = async (user) => {
    try {
      const response = await axios.post(apiURL + '/auth/login', user)
      if (response.status === 200) {
        // set token and user in local storage
        token.value = response.data.access_token
        userInfo.value = response.data.userinfo
        localStorage.setItem('token', token.value)

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'سجلت دخول يا حلو :)',
        })

        router.push('/dashboard')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.data.message,
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.data.message,
      })
    }
  }

  const logout = () => {
    token.value = null
    userInfo.value = null
    localStorage.removeItem('token')
    router.push({ name: 'login' })
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'سجلت خروج يا حلو :)',
    })
  }

  return {
    login,
    logout,
  }
})
