<template>
  <div>
    <div>用户信息：{{ userInfo }}</div>
    <button @click="changeName">修改age</button>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const userInfo = reactive({
      name: "张三",
      age: 18,
    });
    const changeName = () => {
      userInfo.age = 100;
    };
    return {
      userInfo,
      changeName,
    };
  },
});
</script>
