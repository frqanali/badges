<template>
  <div class="col">
    <div class="container d-flex center my-5">
      <div>
        <p class="card-text fs-2 pt-5 px-5 mx-5 my-5">{{ $t('contactUs') }}</p>
      </div>
      <div class="col-5">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            :placeholder="$t('phoneNumber')"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            :placeholder="$t('email')"
            aria-label="Username"
          />
        </div>

        <div class="input-group">
          <textarea
            class="form-control"
            aria-label="With textarea"
            :placeholder="$t('write')"
          ></textarea>
        </div>
        <div class="container d-flex my-5">
          <button type="button" class="btn btn-color btn-lg">{{ $t('send') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-control {
  font-size: 1.2rem; /* Increases font size */
  height: 50px; /* Makes input fields taller */
  padding: 10px; /* Increases padding inside the input fields */
}

textarea.form-control {
  font-size: 1.2rem; /* Increases font size for the textarea */
  height: 150px; /* Increases height of the textarea */
  padding: 10px; /* Increases padding inside the textarea */
}
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
</style>
