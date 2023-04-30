<template>
  <div>
    <div>pageName:{{ pageName }}</div>
    <button @click="changePageName">点击</button>
    <h5>{{ storeName }}</h5>
    <button @click="changeStoreName">修改storeName</button>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useHomeStore } from "../store/home.js";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const pageName = ref("home页面");
    const changePageName = () => {
      pageName.value += pageName.value;
    };

    //使用store
    const homeStore = useHomeStore();
    const { storeName } = storeToRefs(homeStore);

    const changeStoreName = () => {
      homeStore.changeStoreName("changeStore");
    };

    return {
      pageName,
      changePageName,
      storeName,
      changeStoreName,
    };
  },
});
</script>
