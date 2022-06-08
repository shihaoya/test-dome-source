<template>
  <base-menu-nav/>
  <base-user-center/>
  <router-view/>
</template>

<script>
import BaseMenuNav from '@/components/BaseMenuNav'
import BaseUserCenter from '@/components/BaseUserCenter'
export default {
  name: 'App',
  components: {
    BaseMenuNav,
    BaseUserCenter,
  }
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background: url('./assets/images/bg.png');
  margin: 0;
  overflow: hidden;
}
</style>
