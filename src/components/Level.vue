<template>
  <div>
    <hr>
    <b-progress :value="smeter" :max="120" class="mb-3"/>
  </div>
</template>

<script>
export default {
  computed: {
    smeter() {
      if (this.$store.state.smeter > 0) {
        return this.$store.state.smeter;
      }
      return 0;
    }
  }
};
</script>

<style>
</style>
