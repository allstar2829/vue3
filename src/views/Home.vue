<template>
  <div class="wrapper">
    <div class="main">

      <!-- 左側選單欄 -->
      <div class="left">
        <contentNav></contentNav>
      </div>

      <!-- 右側內容區域 -->
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import contentNav from '@/components/contentNav.vue'

export default {
  name: 'Home',
  components: {
    contentNav,
  },

}
</script>

<style>
.main {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.left {
    width: 15vw;
    height: 100%;
    background-color: #fff;
    box-shadow: 1px 1px 2px rgb(180, 180, 180, 0.8);
    padding: 15px;
    box-sizing: border-box;
    position: fixed;
    z-index: 10;
}
.right{
    width: 85vw;
    height: auto;
    /* padding: 15px; */
    /* background-color: #e6e6e6be; */
    box-sizing: border-box;
    margin-left: 15vw;
}
</style>
