import {defineStore} from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  actions: {
    getUsers() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
        })
        .catch((err) => console.log(err));
    },
    getUserById(id) {
      return this.users.find((user) => user.id === id);
    },
    addUser(name) {
      this.users.push({id: this.users.length + 1, name: name});
    },
  },
  getters: {
    getHighIdUsers(state) {
      return state.users.filter((user) => parseInt(user.id) > 4);
    },
  },
});
