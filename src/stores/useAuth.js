import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const apiURL = import.meta.env.VITE_API_URL

export const useAuthStore = defineStore('auth', () => {
  // Define the router instance
  const router = useRouter()
  // Define reactive variables
  const userInfo = ref(null)
  const token = ref(null)

  // check if the user is already signed in (localStorage)
  if (localStorage.getItem('token')) {
    token.value = localStorage.getItem('token')
    try {
      userInfo.value = JSON.parse(localStorage.getItem('userinfo'))
    } catch {
      userInfo.value = null
    }
  }

  // user login
  const login = async (user) => {
    try {
      const response = await axios.post(apiURL + 'auth/login', user)
      if (response.status === 200) {
        // set token and user in local storage
        token.value = response.data.access_token
        userInfo.value = response.data.userinfo.ususername
        localStorage.setItem('token', token.value)
        localStorage.setItem('userinfo', JSON.stringify(userInfo.value))

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'تم تسجيل الدخول بنجاح ',
        })

        router.push('/dashboard')
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.error,
      })
    }
  }

  const logout = () => {
    token.value = null
    userInfo.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('userinfo')
    router.push({ name: 'login' })
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'تم تسجيل الخروج بنجاح ',
    })
  }

  return {
    login,
    logout,
    token,
    userInfo,
  }
})
