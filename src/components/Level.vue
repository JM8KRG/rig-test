<template>
  <div>
    <hr>
    <b-progress
      :value="smeter"
      :max="120"
      class="mb-3"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      smeter: 0
    }
  },
  sockets: {
    connect: function () {
      console.log('client connected.')
    },
    level: function (data) {
      this.smeter = data
    }
  }
}
</script>

<style>
</style>
