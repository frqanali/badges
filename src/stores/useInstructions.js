import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInstructionStore = defineStore('instructionStore', () => {
  //reactive variables
  const instructions = ref([
    {
      id: 1,
      title: 'ضوابط وتعليمات منح هويات للقطاع الخاص',
      desc: 'تيست 1',
    },
    {
      id: 2,
      title: 'تايتل 2',
      desc: 'تيست2',
    },
    {
      id: 3,
      title: 'تايتل3',
      desc: 'تيست3',
    },
    {
      id: 4,
      title: 'تايتل 4',
      desc: 'تيست4',
    },
  ])

  return {
    instructions,
  }
})
