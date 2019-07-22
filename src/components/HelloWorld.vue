<template>
  <div class="hello">
    please select number: <input type="number" v-model.number="counterResult">
    <br/>
    <br/>
    <CountGroup :counterNum="counterResult"></CountGroup>
    <CounterSum></CounterSum>
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
      counterResult: 0,
    }
  },
  watch: {
    counterResult: function (value) {
      if (value === 0) {
        this.$store.commit('resetSum')
      }
    }
  },
  methods: {
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
