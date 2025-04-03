<template>
  <div class="container mt-4">
    <h3 class="mb-4">ادارة الضوابط والتعليمات</h3>
    <div class="table-responsive">
      <table class="table table-bordered table-hover align-middle text-center">
        <thead class="table-primary">
          <tr>
            <th>#</th>
            <th>اسم الضوابط والتعليمات</th>
            <th>الوصف</th>
            <th>اجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(instruction, index) in instructionStore.instructionList"
            :key="instruction.id"
          >
            <td>{{ index + 1 + (currentPage - 1) * 5 }}</td>
            <td>{{ instruction.title }}</td>
            <td>{{ truncateWords(instruction.description, 5) }}</td>

            <td>
              <button
                class="btn btn-sm btn-warning ms-2"
                @click="instructionStore.routeEditInstruction(instruction.id)"
              >
                تعديل
              </button>
              <button
                class="btn btn-sm btn-danger"
                @click="instructionStore.deleteinstruction(instruction.id)"
              >
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 🔄 Pagination -->
    <vue-awesome-paginate
      v-if="instructionStore.totalInstructions > 0"
      :total-items="instructionStore.totalInstructions"
      :items-per-page="5"
      :max-pages-shown="5"
      :show-breakpoint-buttons="false"
      v-model="currentPage"
      @click="onClickHandler"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useInstructionStore } from '@/stores/useInstructions'
import { ref } from 'vue'

// stores
const instructionStore = useInstructionStore()

// reactive variables
const currentPage = ref(1)

// functions

// pagination function
const onClickHandler = (page) => {
  instructionStore.getAllinstructions(page)
}

// truncate the description
const truncateWords = (text, wordLimit = 5) => {
  if (!text) return ''
  const words = text.split(' ')
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text
}

onMounted(async () => {
  await instructionStore.getAllinstructions()
  console.log(instructionStore.instructionList)
})
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 5px;
}

.paginate-buttons {
  height: 35px;
  width: 30px;

  cursor: pointer;

  background-color: rgb(242, 242, 242);

  border: 1px solid rgb(217, 217, 217);

  color: black;
}

.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  background-color: #3498db;

  border: 1px solid #3498db;

  color: white;
}

.active-page:hover {
  background-color: #2988c8;
}
</style>
