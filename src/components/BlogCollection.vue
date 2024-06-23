<script setup>
import axios from "axios";
import { ref } from "vue";

const tools = ref([]);
const getToolColl = async () => {
  axios
    .get(`http://ai.tordor.top:36464/super/blog/coll?type=tool`)
    .then((res) => {
      tools.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
getToolColl();

const arts = ref([]);
const getArtColl = async () => {
  axios
    .get(`http://ai.tordor.top:36464/super/blog/coll?type=art`)
    .then((res) => {
      arts.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
getArtColl();


const codes = ref([]);
const getCodeColl = async () => {
  axios
    .get(`http://ai.tordor.top:36464/super/blog/coll?type=code`)
    .then((res) => {
      codes.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
getCodeColl();
//写一个链接跳转方法 开新窗口
const openNewWindow = (url) => {
  window.open(url, "_blank");
};
</script>
<template>
  <div
    class="paper"
    style="
      width: 1200px;
      margin: 0 auto;
      background-color: white;
      min-height: 1800px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    "
  >
    <div class="card-coll">
      <div class="title">工具</div>
      
      <div class="content">
        <div
          class="item"
          v-for="tool in tools"
          :key="tool.coll_id"
          @click="openNewWindow(tool.coll_url)"
        >
          <div class="icon">
            <img :src="tool.coll_img_url" alt="" />
          </div>
          <div class="appname">{{ tool.name.substring(0,10) }}</div>
        </div>
      </div>
      
    </div>
<hr>
<div class="card-coll">
      <div class="title">编程</div>
      
      <div class="content">
        <div
          class="item"
          v-for="code in codes"
          :key="code.coll_id"
          @click="openNewWindow('')"
        >
          <div class="icon">
            <img :src="code.coll_img_url" alt="" />
          </div>
          <div class="appname">{{ code.name.substring(0,10) }}</div>
        </div>
      </div>
      
    </div>

    <div class="card-coll">
      <div class="title">设计</div>
      
      <div class="content">
        <div
          class="item"
          v-for="art in arts"
          :key="art.coll_id"
          @click="openNewWindow(art.coll_url)"
        >
          <div class="icon">
            <img :src="art.coll_img_url" alt="" />
          </div>
          <div class="appname">{{ art.name.substring(0,10) }}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style scoped>
.title {
  font-size: 30px;
  padding-left: 80px;
  padding-top: 20px;
}
.card-coll {
  margin: 20px;
  /* background-color: yellow; */
}
.content {
  width: 780px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 5px;
  padding: 20px;
  gap: 10px;
}
.item {
  display: flex;
  width: 100px;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin: 10px;
}
.icon {
  width: 70px;
  height: 70px;
  margin: 0 auto;
  background-color: gray;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
}
.icon img {
  width: 100%;
  height: 100%;
}
.icon:hover {
  transform: scale(1.1);
}
.appname {
  margin-top: 5px;
  text-align: center;
}
</style>
