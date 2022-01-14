<template>
  <div id="app">
    <SideNav class="d-none d-md-block" />
    <div class="main-content">
      <header>
        <MainNav />
      </header>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import MainNav from '@/components/layout/MainNav.vue'
import SideNav from '@/components/layout/SideNav.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    SideNav
  }
}
</script>

<style>
:root {
  --primary-gray: #E8EAF0;
}

body {
  font-size: 16px;
}

main {
  padding: 16px;
}

@media (min-width: 768px) {
  .main-content {
    margin-left: 258px;
  }
  main {
    padding: 40px;
  }
}
</style>
