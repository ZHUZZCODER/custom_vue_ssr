import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state() {
    return {
      storeName: "piniaStore",
    };
  },
  getters: {
    getStoreName(state) {
      return state.storeName;
    },
  },
  actions: {
    changeStoreName(payload) {
      this.storeName = payload;
    },
  },
});
