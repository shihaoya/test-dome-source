<template>
  <div class="open-user-center" @click="openUserCenter = true" v-show="!openUserCenter">
    个人中心
  </div>
  <el-drawer
      v-model="openUserCenter"
      title="个人中心"
      direction="rtl"
  >
    <h1>个人中心</h1>
  </el-drawer>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'BaseUserCenter',
  setup() {
    const openUserCenter = ref(false)
    return {
      openUserCenter,
    }
  }
}
</script>

<style scoped>
.open-user-center {
  color: #eee;
  width: 30px;
  height: 100px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2000;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #1a59b7;
  box-shadow: 0 0 10px #041237;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
</style>
