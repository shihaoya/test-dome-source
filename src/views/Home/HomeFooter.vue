<template>
  <div class="home-footer-box">
    <a href="javascript:;">{{authorEmail}}</a>
    <span>网站持续运行时间{{ runHour }}小时</span>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  setup() {
    const runHour = parseInt((new Date() - 1654570000000) / 1000 / 60 / 60)
    const authorEmail = '1634350856@qq.com'
    return {
      runHour, //当前网站运行时间
      authorEmail, //作者邮箱地址
    }
  }
}
</script>

<style lang="less" scoped>
.home-footer-box {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: #eee;
  a {
    color: #eee;
    text-decoration: none;
    margin-right: 10px;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
