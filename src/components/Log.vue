<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { ref } from "vue";
import markdownIt from "markdown-it";
const markdown = new markdownIt();
const route = useRoute();

const id = route.params.log_id;

var config = {
  method: "get",
  url: `http://ai.tordor.top:36464/super/get/blog?id=${id}`,
};

const act = ref({});
axios(config)
  .then(function (response) {
    //    console.log(JSON.stringify(response.data));
    //    alert(response)
    act.value = response.data[0];
    console.log(act.value);
  })
  .catch(function (error) {
    //    console.log(error);
  });
</script>
<template>
  <div
    class="paper"
    style="
      width: 1000px;
      margin: 20px auto;
      margin-top: 50px;
      background-color: white;
      min-height: 1800px;
      padding: 20px 50px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    "
  >
    <div class="title">{{ act.article_name }}</div>
    <div class="look-count">阅读次数{{ act.article_read_count }}次</div>
    <div
      class="introduction"
      v-html="markdown.render(act.article_content)"
    ></div>
  </div>
</template>

<style scoped>
.title {
  font-size: 26px;
  margin-bottom: 10px;
}
.look-count {
  font-size: 16px;
  margin-bottom: 10px;
  color: gray;
}
code {
  display: block;
  background-color: #ebebeb;
  font-family: "Courier New", Courier, monospace;
  padding: 4px 6px;
  font-size: 14px;
  border-radius: 4px;
}
</style>
