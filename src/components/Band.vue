<template>
  <b-form-select :value="freq" :options="bands" size="sm" @change="changeFreq"/>
</template>

<script>
export default {
  data() {
    return {
      bands: [
        { value: 1800000, text: "1.8 MHz" },
        { value: 3500000, text: "3.5 MHz" },
        { value: 7000000, text: "7 MHz" },
        { value: 10000000, text: "10 MHz" },
        { value: 14000000, text: "14 MHz" },
        { value: 18000000, text: "18 MHz" },
        { value: 21000000, text: "21 MHz" },
        { value: 24000000, text: "24 MHz" },
        { value: 28000000, text: "28 MHz" },
        { value: 50000000, text: "50 MHz" },
        { value: 144000000, text: "144 MHz" },
        { value: 430000000, text: "430 MHz" }
      ]
    };
  },
  computed: {
    // 設定周波数に近いバンドを取得する
    freq() {
      const diff = [];
      const allBand = [
        1800000,
        3500000,
        7000000,
        10000000,
        14000000,
        18000000,
        21000000,
        24000000,
        28000000,
        50000000,
        144000000,
        430000000
      ];
      let index = 0;
      for (let i in allBand) {
        diff[i] = Math.abs(allBand[i] - this.$store.state.freq);
        index = diff[index] < diff[i] ? index : i;
      }
      return allBand[index];
    }
  },
  methods: {
    changeFreq(val) {
      this.$store.commit("updateFreq", val);
      this.$socket.emit("command", "set_freq " + val);
    }
  }
};
</script>

<style>
</style>
