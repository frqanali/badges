<template>
  <div>
    <loader v-if="emailStore.loader" />
  </div>
  <div class="container d-flex justify-content-center my-5" id="sec-6">
    <div class="col-10 col-md-6">
      <p class="text-center fs-2 underline-text">{{ $t('contactUs') }}</p>
      <div class="card custom-card contact">
        <div class="col">
          <div class="row">
            <div class="col-md-6">
              <div>
                <i class="bi bi-geo-alt-fill"></i>
                <a
                  href="https://maps.app.goo.gl/pt9D13DsBiDi7yJV9?g_st=com.google.maps.preview.copy"
                  class="fw-bold fs-5 ps-4 pe-2"
                  style="color: inherit"
                >
                  {{ $t('location') }}
                </a>
              </div>
              <small class="text-muted"> {{ $t('address') }} </small>
            </div>

            <div class="col-md-6">
              <div>
                <i class="bi bi-telephone-fill"></i>
                <span class="fw-bold fs-5 ps-4 pe-2">{{ $t('phoneNumber') }}</span>
              </div>
              <small class="text-muted"> 07901948226</small>
            </div>
          </div>
          <div class="mt-0 mt-md-5 col-md-15">
            <div>
              <i class="bi bi-envelope-fill"></i>
              <span class="fw-bold fs-5 ps-4 pe-2">{{ $t('email') }}</span>
            </div>
            <small class="text-muted">gz@pmo.gov.iq</small>
          </div>
        </div>
      </div>

      <div class="card custom-card">
        <div class="row">
          <div class="col-md-6">
            <div class="input-group mb-4">
              <input
                v-model="emailStore.mailData.name"
                type="text"
                class="form-control"
                :placeholder="$t('name')"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-group mb-4">
              <input
                v-model="emailStore.mailData.template"
                type="text"
                class="form-control"
                :placeholder="$t('email')"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>
        </div>
        <div class="input-group mb-4">
          <input
            type="number"
            class="form-control"
            :placeholder="$t('phonenumber')"
            aria-label="Username"
            v-model="emailStore.mailData.phoneNumber"
          />
        </div>
        <div class="input-group mb-4">
          <input
            type="text"
            class="form-control"
            :placeholder="$t('subject')"
            aria-label="Username"
            v-model="emailStore.mailData.subject"
          />
        </div>

        <div class="input-group mb-4">
          <textarea
            class="form-control"
            aria-label="With textarea"
            :placeholder="$t('msg')"
            v-model="emailStore.mailData.body"
          ></textarea>
        </div>

        <div class="text-center">
          <button type="button" class="btn btn-color btn-lg" @click="emailStore.sendMail">
            {{ $t('send') }} <i class="bi bi-send-fill"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import { useNewsStore } from '@/stores/useNews'
import { useEmailStore } from '@/stores/useEmail'
import Loader from './loader.vue'
// stores
const newsStore = useNewsStore()
const emailStore = useEmailStore()

newsStore.sendIpToApi()
</script>

<style scoped>
.custom-card {
  width: 100%; /* Set a reasonable width */
  max-width: 800px; /* Prevent it from being too large */
  padding: 30px; /* Add padding */
  margin: 50px auto; /* Center it horizontally and add vertical spacing */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
  border-radius: 10px; /* Make edges rounded */
  background-color: white; /* Ensure visibility */
  text-align: center; /* Center text if needed */
}

.form-control {
  font-size: 1.2rem; /* Increases font size */
  padding: 10px 13px; /* Adds padding inside the input fields */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
}

textarea.form-control {
  font-size: 1.2rem; /* Increases font size for the textarea */
  padding: 12px 16px; /* Adds padding inside the textarea */
  height: 120px;
  width: 90px; /* Sets a fixed height for the textarea */
  border-radius: 8px; /* Rounded corners */
}

.btn-color {
  background-color: #23486a; /* Dark blue background */
  color: #ffffff; /* White text */
  border-radius: 8px; /* Rounded corners */
  padding: 12px 40px; /* More padding for a larger button */
  font-size: 1.2rem; /* Increases font size for the button */
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.btn-color:hover {
  background-color: #1c3d57; /* Darker blue on hover */
  transform: translateY(-3px); /* Slight hover effect */
}

@media (max-width: 768px) {
  .col-12 {
    padding-left: 20px;
    padding-right: 20px;
  }
  .contact {
    padding-left: 20px;
    padding-right: 20px;
  }
}
.bi-geo-alt-fill {
  font-size: 30px; /* Controls the icon size */
  color: #23486a; /* Sets the fill color */
}
.bi-telephone-fill {
  font-size: 30px; /* Controls the icon size */
  color: #23486a; /* Sets the fill color */
}
.bi-envelope-fill {
  font-size: 30px; /* Controls the icon size */
  color: #23486a; /* Sets the fill color */
}
.underline-text {
  display: inline-block;
  position: relative;
  width: 100%; /* Ensures it takes up the full width of the parent */
  text-align: center; /* Centers the text itself */
}

.underline-text::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 30%; /* Same width as text */
  height: 3px;
  background-color: #4c7b8b;
  transform: translateX(-50%); /* Center the underline */
}
</style>
