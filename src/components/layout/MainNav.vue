<template>
  <b-navbar
    variant="dark"
  >
    <b-navbar-nav class="d-md-none">
      <button class="menu-btn">
        <b-icon icon="list" />
      </button>
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
  background-color: #4ea0a3 !important;
}
.icon {
  height: 16.67px;
  width: 16.67px;
}
.icon:hover {
  cursor: pointer;
}
.icon:first-child {
  margin-right: 18px;
}
.icon:last-child {
  margin-left: 14px;
  margin-right: 32px;
}
.user-information {
  border-left: 1px solid rgba(255, 255, 255, .32);
  height: 48px;
  padding-left: 20px;
}
.user-information img {
  border-radius: 50%;
  height: 40px;
  margin-right: 8px;
  width: 40px;
}
.user-information div p {
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  margin: 0
}

@media (min-width: 768px) {  
  .icon:first-child {
    margin-right: 36px;
  }
  .icon:last-child {
    margin-left: 28px;
    margin-right: 64px;
  }
  .user-information {
    padding-left: 40px;
  }
}
</style>