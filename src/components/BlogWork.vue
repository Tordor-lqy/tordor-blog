<script setup>
import { ref } from "vue";

const articles = ref([]);

articles.value = [
  {
    article_name: "砖块掉落特效",
    article_content: "鼠标滑动即掉落",
    article_url: "https://tordor-lqy.github.io/My-sites/xk-css/4-29/index.html",
  },
  {
    article_name: "鼠标字体轨迹效果",
    article_content: "根据鼠标移动生成字体轨迹",
    article_url: "https://tordor-lqy.github.io/My-sites/2024-5/5-10/main.html",
  },
  {
    article_name: "贪吃蛇",
    article_content: "贪吃蛇迷你网页版",
    article_url: "https://tordor-lqy.github.io/My-sites/xk-css/sanke/index.html",
  },
  {
    article_name: "简易版五子棋游戏",
    article_content: "学习js事件时的作品",
    article_url: "https://tordor-lqy.github.io/My-sites/lqy-css/2024-5/5-2/gobang.html",
  },
  {
    article_name: "抖音音乐播放器效果",
    article_content: "模仿抖音视频卡点风格",
    article_url: "https://tordor-lqy.github.io/My-sites/2024-5/5-3/index.html",
  },
  {
    article_name: "字体开幕效果",
    article_content: "练习css动画",
    article_url: "https://tordor-lqy.github.io/My-sites/lqy-css/2024-4/4-29/start.html",
  },
  {
    article_name: "三鼎工作室招新官网",
    article_content: "三鼎工作室招新官网改版",
    article_url: "https://tordor-lqy.github.io/My-sites/other/html5up-landed/index.html",
  },
  {
    article_name: "VIVO AIGC比赛初赛晋级作品",
    article_content: "小红花H5移动端APP",
    article_url: "https://blog.tordor.top:600/#/",
  },
];

const open = (url) => {
  window.open(url);
};
</script>
<template>
  <div
    class="paper"
    style="
      width: 1200px;
      margin: 0 auto;
      background-color: white;
      height: max-content;
      padding-bottom: 50px;
       /* min-height: 1800px;  */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    "
  >
    <div class="log-card" v-for="article in articles">
      <div class="left">
        <div class="time-box">
          <div class="time">
            <div class="day">29</div>
            <div class="ym">2024/4</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">{{ article.article_name }}</div>
        <div class="look-count">{{ article.article_content }}</div>
        <div class="introduction">
            <iframe :src="article.article_url" width="700" height="400" frameborder="0"></iframe>
        </div>
        <div class="more"  @click="open(article.article_url)">跳转查看></div>
      </div>
    </div>
  </div>
</template>
<style>
.log-card {
  width: 1100px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  margin-top: 40px;
}

.log-card > .left {
  width: 20%;
  height: 100%;
  /* background-color: #cccccc; */
  display: flex;
  justify-content: left;
  align-items: center;
}
.left > .time-box {
  width: 100px;
  height: 100px;
  /* background-color: #cccccc; */

  border: 5px solid #9e6730;
}
.left > .time-box > .time {
  width: 100px;
  height: 100px;
  position: relative;
  left: -20px;
  top: 20px;
  color: white;
  background-color: #0d0d0d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.log-card:hover > .left > .time-box > .time {
  left: 0px;
  top: 0px;
  transform: scale(1.2);
}

.time > .ym {
  font-size: 16px;
}

.time > .day {
  font-size: 40px;
}

.log-card > .right {
  max-width: 700px;
  height: 100%;
  padding: 30px 50px;
  border-bottom: 2px solid #cccccc;
}
.right > .title {
  font-size: 26px;
  margin-bottom: 10px;
}
.right > .look-count {
  font-size: 16px;
  margin-bottom: 10px;
  color: gray;
}
.right > .introduction {
  font-size: 16px;
  margin-bottom: 10px;
  height: 280px;
  overflow: hidden;
}
.right > .more {
  font-size: 16px;
  margin-bottom: 10px;
  text-align-last: right;
  color: burlywood;
}
.right > .more:hover {
  /* color: #cccccc; */
  text-decoration: underline;
  cursor: pointer;
}
/* Paragraph */
/* p {
  display: block;
    margin: 1em 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.6;
} */

</style>
