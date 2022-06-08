<template>
  <header class="home-header-box">
    <div class="header-left">
      <dv-decoration-8 style="width:300px;height:50px;" />
    </div>
    <div class="header-center">
      <h1 class="title">大屏数据展示平台</h1>
      <dv-decoration-5 style="width:300px;height:40px;" />
    </div>
    <div class="header-right">
      <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="less" scoped>
.home-header-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  .header-center {
    text-align: center;
    color: #eee;
    .title {
      margin: 10px 0 -10px;
    }
  }
}
</style>
