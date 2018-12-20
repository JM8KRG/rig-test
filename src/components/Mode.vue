<template>
  <b-form-select @change="changeMode" :value="mode" size="sm" :options="modes"/>
</template>

<script>
export default {
  data () {
    return {
      modes: ['AM', 'FM', 'CW', 'USB', 'LSB']
    }
  },
  methods: {
    changeMode (val) {
      this.$store.commit('updateMode', val)
      this.$socket.emit('command', 'set_mode ' + val)
    }
  },
  computed: {
    mode () {
      return this.$store.state.mode
    }
  }
}
</script>

<style>
</style>
