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
      <div class="title">留言板</div>

      <div class="card" style="margin: 30px auto;">
        <form @submit.prevent="addMessage">
          <textarea v-model="newMessage" placeholder="输入您的留言"></textarea>
          <input type="text" v-model="authorName" placeholder="您的姓名" />
          <button type="submit">提交留言</button>
        </form>
      </div>

      <div class="content">
        <div class="message" v-for="(message, index) in messages" :key="index">
          <div class="avatar">
            <img src="https://via.placeholder.com/70" alt="Avatar" />
          </div>
          <div class="message-content">
            <div class="message-text">{{ message.text }}</div>
            <div class="message-info">
              {{ message.author }} - {{ message.date }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const messages = ref([
  {
    text: "这是一条留言示例",
    author: "匿名",
    date: new Date().toLocaleString(),
  },
]);

const newMessage = ref("");
const authorName = ref("");

const addMessage = () => {
  if (newMessage.value.trim() === "" || authorName.value.trim() === "") {
    alert("请填写完整的留言内容和姓名");
    return;
  }

  messages.value.unshift({
    text: newMessage.value,
    author: authorName.value,
    date: new Date().toLocaleString(),
  });

  // 清空输入框
  newMessage.value = "";
  authorName.value = "";
};
</script>

<style scoped>

.card{
    width: 70%;
    margin: 0 auto;
}

.title {
  font-size: 30px;
  padding-left: 80px;
  padding-top: 20px;
}
.card-coll {
  margin: 20px;
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
.message {
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.avatar {
  width: 70px;
  height: 70px;
  margin-right: 10px;
}
.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.message-content {
  flex: 1;
}
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input[type="text"] {
  width: calc(100% - 22px);
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #0056b3;
}
</style>
