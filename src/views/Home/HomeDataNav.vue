<template>
  <nav class="data-nav-box">
    <home-data-nav-item v-for="dataItem in dataList" :key="dataItem.id" :dataItem="dataItem"/>
  </nav>
</template>

<script>
import HomeDataNavItem from '@/views/Home/HomeDataNavItem'
import {reactive} from 'vue'
import {random} from 'lodash'
export default {
  name: 'HomeDataNav',
  components: {
    HomeDataNavItem,
  },
  setup() {
    const dataList = reactive([])
    const configList = [
      {title: '当前监控', unit: '个'},
      {title: '当前车辆', unit: '辆'},
      {title: '当前行人', unit: '人'},
      {title: '犯罪分子', unit: '人'},
      {title: '流动人口', unit: '人'},
      {title: '常驻人口', unit: '人'},
      {title: '实有人口', unit: '人'},
      {title: '当前监控', unit: '人'},
    ]
    configList.forEach((item,index) => {
      dataList.push({
        id: index + 1,
        title: item.title,
        config: {
          number: [random(0, 100000)],
          content: `{nt}${item.unit}`,
        },
      })
    })
    return {
      dataList
    }
  }
}
</script>

<style lang="less" scoped>
.data-nav-box {
  display: flex;
  justify-content: space-evenly;
  margin: 10px auto;
}
</style>
