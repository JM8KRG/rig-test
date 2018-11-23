<template>
  <div id="app">
    <b-navbar
      variant="dark"
      type="dark">
      <b-navbar-brand href="/">RigTest</b-navbar-brand>
    </b-navbar>
    <b-container
      id="container"
      fluid>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  color: #2c3e50;
}
#container {
  margin-top: 15px;
}
</style>
