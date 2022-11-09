<template>
  <div class="counters">
    <h3>Sum of counters: {{ returnSum }}</h3>
    <!-- <CounterComp
      @decrementCount="decrement"
      @incrementCount="increment"
      v-for="counter in counters"
      :key="counter.id"
      :counter="counter"
    ></CounterComp> -->
    <CounterComp></CounterComp>
  </div>
</template>

<script>
import {useCountersStore} from "@/stores/counters";
import {mapState} from "pinia";
import CounterComp from "./components/CounterComp.vue";
export default {
  name: "App",
  components: {CounterComp},
  computed: {
    // mapState is used for BOTH getting the state AND the getters (aka reactive data and computed)
    ...mapState(useCountersStore, ["returnSum"]),
  },
};
</script>

<style>
.counters {
  width: 200px;
  margin: 0 auto;
}
</style>
