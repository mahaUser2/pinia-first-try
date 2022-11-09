<template>
  <div class="counters">
    <h2>
      Sum of counters: <span>{{ getSum }}</span>
    </h2>
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
  computed: {
    getSum() {
      let sum = 0;
      this.counters.forEach((counter) => (sum += counter.count));
      return sum;
    },
  },
};
</script>

<style>
.counters {
  width: 200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
}

h2 span {
  font-size: 3rem;
}
</style>
