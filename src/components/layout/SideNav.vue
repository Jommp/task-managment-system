<template>
  <b-sidebar 
    id="menu-sidebar"
    width="258px" 
    no-close-on-backdrop 
    no-close-on-esc 
    no-close-on-route-change 
    no-header-close 
    visible 
    no-header 
    bg-variant="white"
  >
    <div class="logo-container d-flex justify-content-center align-items-center">
      <span class="sidebar-logo">
        Nextline
      </span>
    </div>

    <b-nav vertical>
      <b-nav-item 
        v-for="(link, index) in links" 
        :key="index" 
        :to="{ name: link.link }" 
      >
          <b-icon 
            :icon="link.icon" 
            variant="dark"
          /> 
          {{ link.name }}
      </b-nav-item>
    </b-nav>

    <template #footer>
      <div class="help-container mx-auto text-left">
        <p class="m-0">¿Necesitas ayuda?</p>
        <a href="">Ir a sección de ayuda</a>
        <b-icon 
          icon="box-arrow-up-right"
          variant="dark"
        />
      </div>

      <hr>

      <p class="text-center">© Copyright Nextline 2022</p>
    </template>
  </b-sidebar>
</template>

<script>
  export default {
    name: 'SideNav',
    data() {
      return {
        links: [
          {
            name: 'Inicio',
            icon: 'house',
            link: 'home'
          },
          {
            name: 'Tareas',
            icon: 'journal',
            link: 'tasks'
          },
        ]
      }
    },
  }
</script>

<style>
.b-sidebar {
  border-right: 1px solid var(--primary-gray);
  font-size: 14px;
}
.logo-container {
  background-color: #343A40;
  color: #FFFFFF;
  height: 80px;
  text-align: center;
  font-size: 1rem;
  font-weight: 800;
}
.nav-item {
  height: 49px;
  border-bottom: 1px solid var(--primary-gray);
}
.nav-item:last-child {
  border: none;
}

.nav-link {
  color: #323232 !important;
  height: 100%;
  padding: 12px 0 12px 50px !important;
}
.nav-link:hover {
  background-color: var(--primary-gray);
}
.nav-link svg {
  margin-right: 10px;
}
.nav-link span {
  width: 100%;
}

.help-container {
  background: var(--primary-gray);
  border-radius: 4px;
  height: 56px;
  margin-bottom: 16px;
  position: relative;
  width: 224px;
}
.help-container p {
  padding-left: 16px;
  padding-top: 10px;
}
.help-container a {
  color: #323232;
  font-size: 12px;
  padding-bottom: 10px;
  padding-left: 16px;
  text-decoration: underline;
}
.help-container svg {
  position: absolute;
  right: 0;
  top: 0;

  margin-right: 20px;
  margin-top: 20px;
}
.b-sidebar .b-sidebar-footer hr {
  border: 1px solid var(--primary-gray);
  width: 224px;
}

.b-sidebar .b-sidebar-footer p {
  font-size: 12px;
}
</style>