<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 65vh">
    <div class="card text-center" style="width: 25rem">
      <div class="card-body">
        <h5 class="card-title mb-3">تسجيل الدخول</h5>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            :placeholder="$t('username')"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div class="input-group mb-3" :class="{ 'rtl-fix': $i18n.locale === 'ar' }">
          <input
            v-model="password"
            :type="passwordVisible ? 'text' : 'password'"
            class="form-control"
            :placeholder="$t('password')"
            aria-label="Password"
            aria-describedby="basic-addon2"
          />
          <button
            class="input-group-text"
            type="button"
            @click="passwordVisible = !passwordVisible"
            aria-label="Toggle password visibility"
          >
            <i :class="passwordVisible ? 'bi-eye-slash' : 'bi-eye'"></i>
          </button>
        </div>
        <button class="btn btn-color" @click="handleSubmit">{{ $t('enter') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const password = ref('')
const passwordVisible = ref(false)

const router = useRouter()

const handleSubmit = () => {
  router.push('/dashboard')
}
</script>

<style scoped>
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}

/* RTL Fix */
.rtl-fix .form-control {
  border-radius: 0 5px 5px 0 !important;
}

.rtl-fix .input-group-text {
  border-radius: 5px 0 0 5px !important;
}
</style>
