<template>
  <div class="counters">
    {{ usersStore.users }}
    <h3>Sum of counters: {{ countersStore.returnSum }}</h3>
    <!-- <CounterComp
      @decrementCount="decrement"
      @incrementCount="increment"
      v-for="counter in counters"
      :key="counter.id"
      :counter="counter"
    ></CounterComp> -->
    <CounterComp></CounterComp>
    <NewUserComp></NewUserComp>
    {{ usersStore.getUserById(1) }}
    <hr />
    {{ usersStore.getHighIdUsers.length }}
  </div>
</template>

<script>
import {useCountersStore} from "@/stores/counters";
import {useUsersStore} from "@/stores/users";
import {mapStores} from "pinia";
import CounterComp from "./components/CounterComp.vue";
import NewUserComp from "./components/NewUserComp.vue";

export default {
  name: "App",
  components: {CounterComp, NewUserComp},
  computed: {
    // mapStores is used for BOTH getting the state, getters and actions (aka reactive data, computed and methods)
    ...mapStores(useCountersStore),
    ...mapStores(useUsersStore),
  },
  mounted() {
    this.usersStore.getUsers();
  },
};
</script>

<style>
.counters {
  width: 200px;
  margin: 0 auto;
}
</style>
