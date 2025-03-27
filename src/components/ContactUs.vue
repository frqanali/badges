<template>
  <div class="container d-flex justify-content-center mb-5">
    <div class="col-12 col-md-6">
      <p class="text-center fs-2">{{ $t('contactUs') }}</p>

      <div class="input-group mb-4">
        <input
          type="text"
          class="form-control form-control-lg"
          :placeholder="$t('phoneNumber')"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>

      <div class="input-group mb-4">
        <input
          type="email"
          class="form-control form-control-lg"
          :placeholder="$t('email')"
          aria-label="Username"
        />
      </div>

      <div class="input-group mb-4">
        <textarea
          class="form-control form-control-lg"
          aria-label="With textarea"
          :placeholder="$t('write')"
        ></textarea>
      </div>

      <div class="text-center">
        <button type="button" class="btn btn-color btn-lg">{{ $t('send') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-control {
  font-size: 1.2rem; /* Increases font size */
  padding: 12px 16px; /* Adds padding inside the input fields */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
}

textarea.form-control {
  font-size: 1.2rem; /* Increases font size for the textarea */
  padding: 12px 16px; /* Adds padding inside the textarea */
  height: 150px; /* Sets a fixed height for the textarea */
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
}
</style>
