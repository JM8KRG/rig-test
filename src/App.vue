<template>
  <div id="app">
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand href="/">RigTest</b-navbar-brand>
    </b-navbar>
    <b-container id="container" fluid>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  sockets: {
    connect: function() {
      console.log("client connected.");
    },
    command: function(data) {
      console.log(data);
      this.$store.commit("updateFreq", data.freq);
      this.$store.commit("updateMode", data.mode);
      this.$store.commit("updateSql", data.sql);
      this.$store.commit("updateSmeter", data.smeter);
      this.$store.commit("updatePtt", data.ptt);
    },
    smeter: function(smeter) {
      this.$store.commit("updateSmeter", smeter);
    }
  }
};
</script>

<style>
#app {
  color: #2c3e50;
}
#container {
  margin-top: 15px;
}
</style>
