<template>
  <div class="wrapper">
    <aside id="sidebar" :class="[{ collapsed: isExpanded }]">
      <div class="h-100">
        <div class="sidebar-logo">
          <!-- <a href="#">sidebar</a> -->
        </div>
        <ul class="sidebar-nav">
          <li class="sidebar-item">
            <router-link to="/dashboard" class="sidebar-link"
              ><i class="bi bi-house pe-2"></i> الرئيسية
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/DiplomaticRepresentation" class="sidebar-link"
              ><i class="bi bi-list-task pe-2"></i> ادخال بيانات الموفودين
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/visitorsData" class="sidebar-link"
              ><i class="bi bi-person-lines-fill pe-2"></i> معلومات الزائرين
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/notifications" class="sidebar-link"
              ><i class="bi bi-bell pe-2"></i> الاشعارات
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/airplanes" class="sidebar-link"
              ><i class="bi bi-airplane pe-2"></i> الطائرات
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/coordinatorInfo" class="sidebar-link">
              <i class="bi bi-person-bounding-box pe-2"></i> معلومات المنسق
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/bookHotel" class="sidebar-link">
              <i class="bi bi-building pe-2"></i> حجز الفندق
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/badge" class="sidebar-link">
              <i class="bi bi-credit-card-2-front pe-2"></i> اضافة باج
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/notificationForm" class="sidebar-link">
              <i class="bi bi-sticky pe-2"></i> ارسال اشعار
            </router-link>
          </li>
          <!-- <li class="sidebar-item">
            <a
              href=""
              class="sidebar-link collapsed"
              data-bs-target="#pages"
              data-bs-toggle="collapse"
              aria-expanded="false"
              ><i class="bi bi-file-earmark pe-2"></i> الصفحات
            </a>
            <ul
              id="pages"
              class="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li class="sidebar-item">
                <a href="#" class="sidebar-link">page1</a>
              </li>
              <li class="sidebar-item">
                <a href="#" class="sidebar-link">page2</a>
              </li>
            </ul>
          </li> -->
        </ul>
      </div>
    </aside>
    <div class="main">
      <navbar @toggle-sidebar="toggleSidebar" />
      <!-- Content -->
      <main class="content px-3 py-2">
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-12 col-md-8 col-12 d-flex">
              <div class="card flex-fill border-0 illustration">
                <div class="card-body p-0 d-flex flex-fill">
                  <div class="g-0 w-100">
                    <slot></slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <!-- footer-->
      <footerComp />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import navbar from '@/essentials/navbar.vue'
import footerComp from '@/essentials/footerComp.vue'

const isExpanded = ref(false)

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.wrapper {
  align-items: stretch;
  display: flex;
  width: 100%;
}

a {
  cursor: pointer;
  text-decoration: none;
}

li {
  list-style: none;
}

#sidebar {
  max-width: 264px;
  min-width: 264px;
  background-color: #0e2238;
  transition: all 0.35s ease-in-out;
}

#sidebar.collapsed {
  margin-right: -264px;
}

.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 0;
  width: 100%;
  overflow: hidden;
  transition: all -0.35 ease-in-out;
  background-color: var(--bs-dar-bg-subtle);
}

/* sidebar elements */
.sidebar-logo {
  padding: 1.15rem;
}

.sidebar-logo a {
  color: #e9ecef;
  font-size: 1.15rem;
  font-weight: 600;
}

.sidebar-nav {
  flex-grow: 1;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
}

.sidebar-header {
  color: #e9ecef;
  font-size: 0.75rem;
  padding: 1.5rem 1.5rem 0.375rem;
}

a.sidebar-link {
  padding: 0.625rem 1.625rem;
  color: #e9ecef;
  position: relative;
  display: block;
  font-size: 0.875rem;
}

.sidebar-link[data-bs-toggle='collapse']::after {
  border: solid;
  border-width: 0 0.075rem 0.075rem 0;
  content: '';
  display: inline-block;
  padding: 2px;
  position: absolute;
  left: 1.5rem;
  top: 1.4rem;
  transform: rotate(-135deg);
  transition: all 0.2s ease-out;
}

.sidebar-link[data-bs-toggle='collapse'].collapsed::after {
  transform: rotate(45deg);
  transition: all 0.2s ease-out;
}

.content {
  flex: 1;
  /* max-width: 100vw;
  width: 100vw; */
}
</style>
