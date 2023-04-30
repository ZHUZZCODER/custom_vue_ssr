<template>
  <div>
    <router-link to="/home">
      <button>homePage</button>
    </router-link>
    <router-link to="/user">
      <button>userPage</button>
    </router-link>
    <router-view></router-view>
    <h4>{{ count }}</h4>
    <button @click="changeCount">增加</button>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, { attrs, slots, emit }) {
    const count = ref(0);
    const changeCount = () => {
      count.value++;
    };
    return {
      count,
      changeCount,
    };
  },
});
</script>
