import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useAuthStore } from './useAuth'

const apiURL = import.meta.env.VITE_API_URL

export const useInstructionStore = defineStore('instructionStore', () => {
  // Reactive variables
  const router = useRouter()
  const useAuth = useAuthStore()

  const singleinstruction = ref({
    ruletitle: '',
    ruledescription: '',
    ruletitle_en: '',
    ruledescription_en: '',
  })

  const instructionList = ref([])

  const instructionId = ref(null)

  const totalInstructions = ref(0)

  // functions

  const createinstruction = async () => {
    try {
      const response = await axios.post(apiURL + 'greenzone/create_rule', singleinstruction.value, {
        headers: { Authorization: `Bearer ${useAuth.token}` },
      })

      if (response.status === 201) {
        Swal.fire({
          title: 'تم اضافة الضوابط والتعليمات  بنجاح',
          icon: 'success',
        })

        resetForm()
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في إضافة الضوابط والتعليمات',
        icon: 'error',
      })
    }
  }

  const getAllinstructions = async (page = 1) => {
    const payload = {
      Per_Page: 5,
      page: page,
    }
    try {
      const response = await axios.post(apiURL + 'greenzone/get_rules', payload)

      if (response.status === 200) {
        instructionList.value = response.data.rules
        totalInstructions.value = response.data.pagination.total_items
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في جلب الضوابط والتعليمات',
        icon: 'error',
      })
    }
  }

  const getSingleinstruction = async (id) => {
    try {
      const response = await axios.get(
        apiURL + 'greenzone/get_rule_by_id/' + id,

        {
          headers: { 'Content-Type': 'application/json' },
        },
      )

      if (response.status === 200) {
        singleinstruction.value.ruletitle = response.data.ruletitle
        singleinstruction.value.ruledescription = response.data.description
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في جلب الضوابط والتعليمات',
        icon: 'error',
      })
    }
  }

  const routeEditInstruction = (id) => {
    router.push('/addInstruction')
    instructionId.value = id
    getSingleinstruction(id)
  }

  const editInstruction = async () => {
    try {
      const response = await axios.put(
        apiURL + 'greenzone/update_rule/' + instructionId.value,
        singleinstruction.value,
        {
          headers: { Authorization: `Bearer ${useAuth.token}` },
        },
      )
      if (response.status === 200) {
        Swal.fire({
          title: 'تم تعديل الضوابط والتعليمات بنجاح',
          icon: 'success',
        })

        resetForm()
        router.push('/allInstructions')
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في تعديل الضوابط والتعليمات',
        icon: 'error',
      })
    }
  }

  const deleteinstruction = async (id) => {
    try {
      const response = await axios.delete(
        apiURL + 'greenzone/delete_rule/' + id,

        {
          headers: { Authorization: `Bearer ${useAuth.token}` },
        },
      )
      if (response.status === 200) {
        Swal.fire({
          title: 'تم حذف الضوابط والتعليمات بنجاح',
          icon: 'success',
        })

        // delete the service from the list
        const index = instructionList.value.findIndex((instruction) => instruction.id === id)
        if (index !== -1) {
          instructionList.value.splice(index, 1)
        }
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: 'فشل في حذف الضوابط والتعليمات',
        icon: 'error',
      })
    }
  }

  const resetForm = () => {
    singleinstruction.value = {
      ruletitle: '',
      ruledescription: '',
      ruletitle_en: '',
      ruledescription_en: '',
    }

    instructionId.value = null
  }

  return {
    createinstruction,
    singleinstruction,
    getAllinstructions,
    instructionList,
    deleteinstruction,
    totalInstructions,
    routeEditInstruction,
    editInstruction,
    instructionId,
    getSingleinstruction,
  }
})
