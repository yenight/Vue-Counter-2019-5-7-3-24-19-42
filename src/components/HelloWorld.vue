<template>
  <div class="hello">
    please select number: <input type="number" v-model.number="result">
    <br/>
    <br/>
    <CountGroup :counterNum="result" ref="countGroup" @getCountSum="getCountSum"></CountGroup>
    <CounterSum :countSum="countSum"></CounterSum>
  </div>
</template>

<script>
import CountGroup from "@/components/CountGroup";
import CounterSum from "@/components/CounterSum";
export default {
  name: 'HelloWorld',
  components: {CounterSum, CountGroup},
  props: {
    msg: String
  },
  data: function () {
    return {
      result: 0,
      countSum: 0
    }
  },
  watch: {
    result: function (value) {
      if (value === 0) {
        this.countSum = 0
      }
    }
  },
  methods: {
    getCountSum: function (value) {
      this.countSum = this.result === 0 ? 0 : value
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
