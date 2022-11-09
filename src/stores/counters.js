import {defineStore} from "pinia";

import counters from "@/assets/counters";

export const useCountersStore = defineStore("counters", {
  state: () => {
    return {
      counters,
    };
  },
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
    returnSum() {
      let sum = 0;
      this.counters.forEach((counter) => {
        sum += counter.count;
      });
      return sum;
    },
  },
});
