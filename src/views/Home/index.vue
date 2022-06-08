<template>
  <div class="home-box">
    <home-header/>
    <home-data-nav/>
    <home-content/>
    <home-footer/>
  </div>
</template>

<script>
import HomeHeader from '@/views/Home/HomeHeader'
import HomeDataNav from '@/views/Home/HomeDataNav'
import HomeContent from '@/views/Home/HomeContent'
import HomeFooter from '@/views/Home/HomeFooter'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeDataNav,
    HomeContent,
    HomeFooter,
  }

}
</script>

<style lang="less" scoped>
.home-box {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
