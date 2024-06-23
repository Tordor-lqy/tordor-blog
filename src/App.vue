<script setup>

</script>

<template>
  <!-- <div v-draggable class="music">
      <iframe  frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="https://music.163.com/outchain/player?type=0&id=7729720114&auto=1&height=430"></iframe>
  </div> -->
  <RouterView />
</template>

<style scoped>
.music {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;
}
</style>