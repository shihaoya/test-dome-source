<template>
  <div class="data-nav-item">
    <h2>{{ dataItem.title }}</h2>
    <dv-digital-flop :config="dataItem.config" style="width:140px;height:50px;" />
  </div>
</template>

<script>
export default {
  name: 'HomeDataNavItem',
  props: {
    dataItem: Object
  },
}
</script>

<style lang="less" scoped>
.data-nav-item {
  display: inline-flex;
  flex-direction: column;
  color: #eee;
  height: 100px;
  justify-content: center;
  align-items: center;
  background: #041237;
  box-shadow: 0 0 5px #224882;
  box-sizing: border-box;
  h2 {
    margin: 10px auto;
  }
}
</style>
