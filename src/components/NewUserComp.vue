<template>
  <div>
    <form @submit.prevent="addUser">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <button>Add user</button>
    </form>
  </div>
</template>

<script>
import {useUsersStore} from "@/stores/users";
import {mapStores} from "pinia";
export default {
  name: "NewUserComp",
  data() {
    return {
      username: undefined,
    };
  },
  computed: {
    ...mapStores(useUsersStore),
  },
  methods: {
    addUser() {
      this.usersStore.addUser(this.username);
    },
  },
};
</script>

<style scoped></style>
