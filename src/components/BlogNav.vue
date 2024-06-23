<script setup>

const open = (url) => {
    window.open(url, '_blank');
}


</script>
<template>
<div class="nav">
    <div class="left">
        <hr>
        Tordor
        <hr>
    </div>
    <div class="right">
        <div class="item" @click="open('https://github.com/Tordor-lqy')">GitHub</div>
        <div class="item" @click="open('https://git.henau.edu.cn/TorDor')" >GitLab</div>
        <div class="item" @click="open('https://blog.tordor.top')">Blog</div>
    </div>
</div>
</template>

<style scoped>
.nav{
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 100px;
    font-family:'Courier New', Courier, monospace;
}
.left{
    font-size: 24px;
}
.left > hr{
    margin: 2px 0;
}
.right{
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}
.right > .item{
    cursor: pointer;
}
.right > .item:hover{
    color: #009688;
}
</style>