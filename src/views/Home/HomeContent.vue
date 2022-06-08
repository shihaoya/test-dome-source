<template>
<div class="home-content">
  <section class="content-left">
    <dv-border-box-2 class="border-padding">
      <dv-scroll-ranking-board :config="rankConfig" style="width:100%;height:100%" />
    </dv-border-box-2>
  </section>
  <section class="content-center">
    <dv-border-box-6 class="border-padding">
      <dv-charts :option="gaugeConfig" />
    </dv-border-box-6>
    <dv-border-box-6 class="border-padding">
      <dv-active-ring-chart :config="annularConfig" style="width:100%;height:100%"/>
    </dv-border-box-6>
    <dv-border-box-6 class="border-padding">
      <dv-water-level-pond :config="waterLevelConfig" style="width:100%;height:100%"/>
    </dv-border-box-6>
    <dv-border-box-6 class="border-padding">
      <dv-capsule-chart :config="capsuleConfig" style="width:100%;height:100%" />
    </dv-border-box-6>
  </section>
  <section class="content-right">
    <dv-scroll-board :config="scrollTableConfig" style="width:100%;height:100%" />
  </section>
</div>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'HomeContent',
  setup() {
    //排名轮播配置
    const rankConfig = reactive({
      data: [
        {name: '周口', value: 55},
        {name: '南阳', value: 120},
        {name: '西峡', value: 78},
        {name: '驻马店', value: 66},
        {name: '新乡', value: 80},
        {name: '信阳', value: 45},
        {name: '漯河', value: 29},
      ]
    })
    //油量表配置
    const gaugeConfig = reactive({
      title: {
        text: '剩余油量表',
        style: {
          fill: '#fff'
        }
      },
      series: [
        {
          type: 'gauge',
          data: [ { name: 'itemA', value: 55 } ],
          center: ['50%', '60%'],
          axisLabel: {
            formatter: '{value}%',
            style: {
              fill: '#fff'
            }
          },
          axisTick: {
            style: {
              stroke: '#fff'
            }
          },
          animationCurve: 'easeInOutBack'
        }
      ]
    })
    //动态环配置
    const annularConfig = reactive({
      data: [
        {
          name: '周口',
          value: 55
        },
        {
          name: '南阳',
          value: 120
        },
        {
          name: '西峡',
          value: 78
        },
        {
          name: '驻马店',
          value: 66
        },
        {
          name: '新乡',
          value: 80
        }
      ],
      radius: '65%',
      activeRadius: '70%'
    })
    //水位配置
    const waterLevelConfig = reactive({
      data: [66]
    })
    //胶囊柱配置
    const capsuleConfig = reactive({
      data: [
        {
          name: '南阳',
          value: 167
        },
        {
          name: '周口',
          value: 67
        },
        {
          name: '漯河',
          value: 123
        },
        {
          name: '郑州',
          value: 55
        },
        {
          name: '西峡',
          value: 98
        }
      ]
    })
    //滚动表配置
    const scrollTableConfig = reactive({
      data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3']
      ],
      rowNum: 6,
    })
    return {
      rankConfig,
      gaugeConfig,
      annularConfig,
      waterLevelConfig,
      capsuleConfig,
      scrollTableConfig,
    }
  }
}
</script>

<style lang="less" scoped>
.border-padding {
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
}
.home-content {
  display: flex;
  justify-content: space-around;

  .content-left, .content-center, .content-right {
    width: 30%;
    height: 65vh;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
