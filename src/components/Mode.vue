<template>
  <b-form-select
    @change="changeMode"
    :value="mode"
    size="sm"
    :options="modes"/>
</template>

<script>
export default {
  data () {
    return {
      mode: this.$store.state.mode,
      modes: ['SSB', 'CW', 'AM', 'FM']
    }
  },
  methods: {
    changeMode (val) {
      this.mode = val
      this.$store.commit('updateMode', val)
    }
  }
}
</script>

<style>
</style>
