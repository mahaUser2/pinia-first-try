<template>
  <div class="counters">
    <CounterComp
      @decrementCount="decrement"
      @incrementCount="increment"
      v-for="counter in counters"
      :key="counter.id"
      :counter="counter"
    ></CounterComp>
  </div>
</template>

<script>
import counters from "@/assets/counters";
import CounterComp from "./components/CounterComp.vue";
export default {
  name: "App",
  data() {
    return {
      counters,
    };
  },
  components: {CounterComp},
  methods: {
    decrement(id) {
      let curCounter = this.counters.find((counter) => counter.id === id);
      curCounter.count--;
    },
    increment(id) {
      let curCounter = this.counters.find((counter) => counter.id === id);
      curCounter.count++;
    },
  },
};
</script>

<style>
.counters {
  width: 200px;
  margin: 0 auto;
}
</style>
