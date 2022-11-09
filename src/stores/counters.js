import {defineStore} from "pinia";

import counters from "@/assets/counters";

export const useCountersStore = defineStore("counters", {
  state: () => ({
    counters,
    users: [],
  }),
  //   Actions are like methods
  actions: {
    decrement(id) {
      let curCounter = this.counters.find((counter) => counter.id === id);
      curCounter.count--;
    },
    increment(id) {
      let curCounter = this.counters.find((counter) => counter.id === id);
      curCounter.count++;
    },
  },
  //   Getters are like computed properties
  getters: {
    returnSum(state) {
      let sum = 0;
      state.counters.forEach((counter) => {
        sum += counter.count;
      });
      return sum;
    },
  },
});
