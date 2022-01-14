<template>
  <b-navbar
    variant="dark"
  >
    <b-navbar-nav class="d-md-none">
      <b-button class="menu-btn">
        <b-icon icon="list" />
      </b-button>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto align-items-center">
      <div class="user-information d-flex align-items-center">
        <div>
          <p>José María MP</p>
          <p>Frontend Dev</p>
        </div>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

<style scoped>
nav  {
  height: 80px;
}
.navbar-nav button {
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
}
.user-information {
  border-left: 1px solid rgba(255, 255, 255, .32);
  height: 48px;
  padding-left: 20px;
}
.user-information div p {
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  margin: 0
}

@media (min-width: 768px) {
  .user-information {
    padding-left: 40px;
  }
}
</style>