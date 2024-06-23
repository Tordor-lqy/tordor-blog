<script setup>
import BlogNav from "./BlogNav.vue";
import BlogFootNav from "./BlogFootNav.vue";
import BlogLog from "./BlogLog.vue";
import BlogCollection from "./BlogCollection.vue";
import BlogMessage from "./BlogMessage.vue";
import BlogWork from "./BlogWork.vue";
import { ref } from "vue";
const tab = ref(0);
</script>
<template>
  <div class="bg">
    <!-- <img class="bg" src="/src/assets/bg.jpg" /> -->
    <div style="width: 900px; margin: 0 auto">
      <BlogNav />
      <div class="avatar-box">
        <div class="avatar-border">
          <img class="avatar" src="/src/assets/avatar.png" alt="" />
        </div>
        <div class="introduction">欢迎来到我的Blog</div>
      </div>
      <div class="info">
        <div class="item-info">25 日志</div>
        <div class="item-info">20 标签</div>
      </div>
    </div>
  </div>
  <BlogFootNav v-model="tab" />

  <div
    style="
      width: 99vw;
      margin: 0 auto;
      padding: 60px 0px;
      background-color: #cccccc;
    "
  >
    <BlogLog class="pageTurn" v-if="tab === 0" />
    <BlogCollection class="pageTurn" v-if="tab === 1" />
    <BlogMessage class="pageTurn" v-if="tab === 3"></BlogMessage>
    <BlogWork class="pageTurn" v-if="tab === 2" />
  </div>
</template>
<style scoped>
@keyframes page-turn {
  0% {
    transform: translateX(-1000px) translateY(300px) rotate(-20deg)
      rotateY(-120deg);
  }
  100% {
    transform: translateX(0) translateY(0) rotate(0deg) rotateY(0deg);
  }
}

.pageTurn {
  animation: page-turn 1s;
}

.bg {
  width: 99vw;
  height: 99vh;
  margin: 0 auto;
  background-image: url("/src/assets/bg.jpg");

  /* background-size:99vw auto; */
  background-size: cover;
  /* background-attachment: fixed; */
  /* background-repeat: repeat-y; */
  background-position: center;
  /* height: 100vh; */
  /* position: relative; */
}
.avatar-border {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin: 0 auto;
  display: block;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}
.avatar-box:hover .avatar-border {
  width: 210px;
  height: 210px;
}
.introduction {
  width: 250px;
  height: 10px;
  margin: 20px auto;
  border-radius: 10px;
  color: white;
  background-color: rgba(100, 100, 100, 0.5);
  text-align: center;
  line-height: 10px;
  opacity: 0;
  transition: all 0.3s ease;
}
.avatar-box:hover .introduction {
  opacity: 1;
  height: 30px;
  line-height: 30px;
}
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin: 0 auto;
  display: block;
  /* margin-top: 100px; */
}
/* .avatar-box{
    margin: 0 auto;
    height: 600px;
    padding: 100px;
} */

.info {
  display: flex;
  color: white;
  font-size: 24px;
  margin-top: 180px;
  justify-content: space-between;
  width: 200px;
  margin: 10px auto;
  margin-top: 100px;
  margin-bottom: 500px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
