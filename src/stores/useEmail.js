import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const apiURL = import.meta.env.VITE_API_URL

export const useEmailStore = defineStore('email', () => {
  const mailData = ref({
    subject: '',
    body: '',
    template: '',
    name: '',
    phoneNumber: '',
  })

  const loader = ref(false)

  const sendMail = async () => {
    const payload = {
      subject: mailData.value.subject,
      body: mailData.value.body,
      template: mailData.value.template,
    }

    try {
      loader.value = true
      const response = await axios.post(apiURL + 'greenzone/send-email', payload)
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      loader.value = false
    }
  }

  return { sendMail, mailData }
})
