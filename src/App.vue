<script setup>
import { RouterLink, RouterView } from "vue-router";


</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">User Application</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/about">About Us</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/users">Users</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/rols">Rols</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  


  <RouterView />
</template>

<style scoped>
 header {
    background-color: #3CBC8D;
    padding: 20px 0;
  }

  .navbar {
    margin-bottom: 20px;
  }

  .navbar-brand {
    font-size: 2em;
    color: azure;
    
  }

  .navbar-nav .nav-item .nav-link {
    font-size: 1em;
    color: #fff;
    
  }
  ul {
  margin: 1px;
  padding: 2px;
}

</style>
