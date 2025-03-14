<template>
  <nav class="navbar">
    <div class="navbar-left">
      <button class="sidebar-toggle" @click="toggleSidebar">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <div class="navbar-right">
      <div class="icons-container ms-5">
        <div class="dropdown">
          <a href="#" class="avatar-container" @click="toggleDropdown">
            <img src="/src/assets/img/userlogo.png" class="avatar" alt="User Avatar" />
          </a>
          <div class="dropdown-menu" v-if="isDropdownOpen">
            <!-- Login link when no token -->
            <router-link to="/login" class="dropdown-item"> تسجيل دخول </router-link>

            <!-- Logout link when token is present -->
            <a href="#" class="dropdown-item"> تسجيل خروج </a>
          </div>
        </div>
      </div>

      <div class="lang-buttons">
        <!-- <button class="btn-lang" @click="switchLanguage('en')">EN</button>
        <button class="btn-lang" @click="switchLanguage('ar')">AR</button> -->
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['toggle-sidebar'])
const isDropdownOpen = ref(false) // Using ref to track dropdown state

const toggleSidebar = () => {
  emit('toggle-sidebar')
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value // Toggle dropdown visibility
}
</script>

<style scoped>
/* Modern Navbar Styling */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Sidebar Toggle */
.sidebar-toggle {
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.sidebar-toggle:hover {
  transform: scale(1.1);
}

/* Right Section (Notifications + User Dropdown) */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icons-container {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}

/* Avatar & Dropdown */
.avatar-container {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 5px;
  border-radius: 50px;
  transition: 0.3s;
}

.avatar-container:hover {
  background-color: #f0f0f0;
}

.avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* Dropdown Menu */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 50px; /* Adjusted so it appears correctly */
  right: 0;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: block;
  min-width: 150px;
  z-index: 100;
  padding: 0;
}

.dropdown-item {
  padding: 12px 16px;
  text-align: right;
  display: block;
  color: #333;
  text-decoration: none;
  transition: 0.3s;
  border-bottom: 1px solid #f0f0f0;
}

.dropdown-item:hover {
  background: #007bff;
  color: #fff;
}

.dropdown-item:last-child {
  border-bottom: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    text-align: center;
  }
  .navbar-center {
    margin: 10px 0;
    gap: 20px;
  }
  .navbar-right {
    flex-direction: column;
    gap: 10px;
  }
  .icons-container {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
