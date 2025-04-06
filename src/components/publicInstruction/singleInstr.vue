<template>
  <div class="container mt-5">
    <div class="row g-4">
      <!-- single instruction section -->
      <div class="col-lg-8 col-md-7 col-12">
        <div class="border w-100 p-3 d-flex flex-column gap-3">
          <div class="d-flex flex-column gap-2">
            <h3 class="card-title" style="text-align: justify">
              {{ instructionStore.singleinstruction.ruletitle }}
            </h3>
            <p class="card-text" style="text-align: justify">
              {{ instructionStore.singleinstruction.ruledescription }}
            </p>
          </div>
          <div class="d-flex justify-content-end">
            <router-link to="/">
              <button class="btn btn-color">{{ $t('back') }}</button>
            </router-link>
          </div>
        </div>
      </div>
      <!-- pagination section -->
      <div class="col-lg-4 col-md-5 col-12">
        <div class="card">
          <div class="card-header">اخر الضوابط والتعليمات</div>
          <ul class="list-group list-group-flush p-0">
            <li
              v-for="instructions in instructionStore.instructionList"
              :key="instructions.id"
              class="list-group-item"
              @click="instructionStore.getSingleinstruction(instructions.id)"
            >
              {{ instructions.title }}
            </li>
          </ul>
          <div class="card-footer">
            <vue-awesome-paginate
              :total-items="instructionStore.totalInstructions"
              :items-per-page="5"
              :max-pages-shown="5"
              :show-breakpoint-buttons="false"
              v-model="currentPage"
              @click="onClickHandler"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useInstructionStore } from '@/stores/useInstructions'
// route
const route = useRoute()
// stores
const instructionStore = useInstructionStore()

// reactive variables
const currentPage = ref(1)

// functions

const onClickHandler = (page) => {
  instructionStore.getAllinstructions(page)
}

// on mounted
onMounted(async () => {
  await instructionStore.getAllinstructions()

  if (route.query.id) {
    instructionStore.getSingleinstruction(route.query.id)
  } else {
    if (instructionStore.instructionList.length > 0) {
      instructionStore.getSingleinstruction(instructionStore.instructionList[0].id)
    }
  }
})
</script>

<style scoped>
.list-group-item:hover {
  background-color: #f0f0f0; /* light gray */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

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
.btn-color {
  color: aliceblue;
  background-color: #3b6790;
}
</style>
