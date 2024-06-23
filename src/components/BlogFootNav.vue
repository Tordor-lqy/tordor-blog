<script setup>
import { ref,defineModel } from "vue";
const tabs = ref(["文章", "收藏", "作品", "留言"]);
const index = defineModel();
</script>
<template>
  <div
    class="foot"
    style="display: flex; justify-content: center; align-items: center"
  >
    <div
      style="
        width: 900px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        color: white;
        font-size: 20px;
        align-items: center;
      "
    >
      <div class="tab-item" v-for="(item , i) in tabs" @click="index = i">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.foot {
  width: 99vw;
  height: 100px;
  background-color: rgba(50, 50, 50, 0.7);
}
.tab-item {
  width: 25%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
}
.tab-item:hover {
  background-color: rgba(50, 50, 50, 0.5);
  color: #009688;
}
</style>
