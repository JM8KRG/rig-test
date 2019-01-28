<template>
  <b-button-toolbar aria-label="Toolbar with button groups and input groups">
    <b-button-group>
      <b-button @click="down">←</b-button>
      <b-button @click="up">→</b-button>
    </b-button-group>
    <b-input-group class="w-25 mx-1">
      <b-form-select @change="changeStep" :value="step" :options="steps"/>
    </b-input-group>
  </b-button-toolbar>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        { value: 1000000, text: "1 MHz" },
        { value: 20000, text: "20 kHz" },
        { value: 10000, text: "10 kHz" },
        { value: 5000, text: "5 kHz" },
        { value: 2000, text: "2 kHz" },
        { value: 1000, text: "1 kHz" },
        { value: 500, text: "500 Hz" },
        { value: 100, text: "100 Hz" },
        { value: 50, text: "50 Hz" },
        { value: 10, text: "10 Hz" },
        { value: 1, text: "1 Hz" }
      ]
    };
  },
  methods: {
    up() {
      let freq =
        parseInt(this.$store.state.freq) + parseInt(this.$store.state.step);

      // 周波数が440MHz以上なら440MHzに変更する
      if (440000000 < freq) {
        freq = 440000000;
      }

      this.$socket.emit("command", "set_freq " + freq);
      this.$store.commit("updateFreq", freq);
    },
    down() {
      let freq =
        parseInt(this.$store.state.freq) - parseInt(this.$store.state.step);

      // 周波数が1.8MHZ未満なら1.8MHzに変更する
      if (freq < 1800000) {
        freq = 1800000;
      }

      this.$socket.emit("command", "set_freq " + freq);
      this.$store.commit("updateFreq", freq);
    },
    changeStep(val) {
      this.$store.commit("updateStep", val);
    }
  },
  computed: {
    step() {
      if (
        this.$store.state.mode === "USB" ||
        this.$store.state.mode === "LSB" ||
        this.$store.state.mode === "CW"
      ) {
        this.$store.commit("updateStep", 10);
        return 10;
      }
      if (this.$store.state.mode === "AM") {
        this.$store.commit("updateStep", 1000);
        return 1000;
      }
      if (this.$store.state.mode === "FM") {
        this.$store.commit("updateStep", 20000);
        return 20000;
      }
    }
  }
};
</script>

<style>
</style>
