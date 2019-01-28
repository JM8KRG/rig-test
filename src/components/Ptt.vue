<template>
  <toggle-button
    :value="ptt"
    :color="{checked: '#d9534f', unchecked: '#428bca'}"
    :sync="true"
    :labels="{checked: 'TX', unchecked: 'RX'}"
    @change="switchRxAndTx"
  />
</template>

<script>
export default {
  computed: {
    ptt() {
      if (this.$store.state.ptt == 1) {
        return true;
      }
      return false;
    }
  },
  methods: {
    switchRxAndTx(change) {
      const switchFlag = change.value ? 1 : 0;
      this.$socket.emit("command", "set_ptt " + switchFlag);
    }
  }
};
</script>

<style>
</style>
