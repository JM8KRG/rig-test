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
      return this.$store.state.smeter;
    }
  }
};
</script>

<style>
</style>
