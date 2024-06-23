<script setup>
import markdownIt from "markdown-it";
import axios from "axios";
import { ref } from "vue";
const markdown = new markdownIt();
const md = markdown.render("#### Hello, markdown-it!");
var config = {
  method: "get",
  url: "http://ai.tordor.top:36464/super/blog/article",
};

const articles = ref([]);

axios(config)
  .then(function (response) {
    articles.value = response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
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
        <div class="look-count">阅读次数{{ article.article_read_count }}次</div>
        <div
          class="introduction"
          v-html="markdown.render(article.article_content)"
        ></div>
        <div class="more"  @click="$router.push('/log/' + article.article_id)">阅读更多></div>
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

/* Code */
code {
  display: block;
  background-color: #ebebeb;
  font-family: "Courier New", Courier, monospace;
  padding: 4px 6px;
  font-size: 14px;
  border-radius: 4px;
}
img {
  max-width: 300px;
}
</style>
