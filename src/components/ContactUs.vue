<template>
  <div class="container d-flex justify-content-center mb-4">
    <div class="col-10 col-md-6">
      <p class="text-center fs-2">{{ $t('contactUs') }}</p>
      <div class="card custom-card">
        <div class="row">
          <div class="col-md-6">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#23486a"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                />
              </svg>
              <span class="fw-bold fs-5 ps-4 pe-2">الموقع</span>
            </div>
            <small class="text-muted"> كرادة مريم</small>
          </div>

          <div class="col-md-6">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#23486a"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <span class="fw-bold fs-5 ps-4 pe-2">الهاتف</span>
            </div>
            <small class="text-muted"> 07765657874</small>
          </div>
        </div>
      </div>

      <div class="card custom-card">
        <div class="row">
          <div class="col-md-6">
            <div class="input-group mb-4">
              <input
                type="text"
                class="form-control"
                placeholder="الاسم"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-group mb-4">
              <input
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
          <input type="email" class="form-control" placeholder="الموضوع" aria-label="Username" />
        </div>

        <div class="input-group mb-4">
          <textarea
            class="form-control"
            aria-label="With textarea"
            placeholder="الرسالة"
          ></textarea>
        </div>

        <div class="text-center">
          <button type="button" class="btn btn-color btn-lg">{{ $t('send') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

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
}
</style>
