<template>
  <div>
    <vue-slider
      ref="slider"
      :min="min"
      :max="max"
      :interval="interval"
      :value="sql"
      @callback="sendSql"
    ></vue-slider>
  </div>
</template>

<script>
import vueSlider from "vue-slider-component";
export default {
  components: {
    vueSlider
  },
  data() {
    return {
      min: 0,
      max: 1,
      interval: 0.000001
    };
  },
  computed: {
    sql() {
      return this.$store.state.sql;
    }
  },
  methods: {
    sendSql(val) {
      this.$socket.emit("command", "set_level SQL " + val);
    }
  }
};
</script>

<style>
</style>
