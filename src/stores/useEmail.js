import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { required, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

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

  // validation
  const rules = computed(() => ({
    mailData: {
      subject: {
        required: helpers.withMessage('يحب كتابة موضوع الرسالة', required),
      },
      body: {
        required: helpers.withMessage('يجب كتابة نص الرسالة', required),
      },
      template: {
        required: helpers.withMessage('ايميل المرسل مطلوب', required),
      },
    },
  }))

  const v$ = useVuelidate(rules, { mailData })

  // reset form function
  const resetForm = () => {
    mailData.value = {
      subject: '',
      body: '',
      template: '',
      name: '',
      phoneNumber: '',
    }
  }

  // send mail function

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
      resetForm()
    } catch (error) {
      console.log(error)
    } finally {
      loader.value = false
    }
  }

  return { sendMail, mailData, loader, v$ }
})
