<template>
  <div>
    <b-row>
      <b-col>
        <b-card header-tag="header" footer-tag="footer">
          <h6 slot="header" class="mb-0">IC-9100</h6>

          <b-row>
            <b-col>
              <h1>{{ freq }}</h1>
            </b-col>

            <b-col>
              <band/>
            </b-col>

            <b-col>
              <mode/>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <interval/>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <level/>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col>
        <h2>/dev/ttyUSB0</h2>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Band from "./Band";
import Mode from "./Mode";
import Interval from "./Interval";
import Level from "./Level";

export default {
  name: "HelloWorld",
  computed: {
    freq() {
      return this.$store.state.freq
        .toString()
        .replace(/(\d)(?=(\d{3})+$)/g, "$1.");
    }
  },
  components: {
    Band,
    Mode,
    Interval,
    Level
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
