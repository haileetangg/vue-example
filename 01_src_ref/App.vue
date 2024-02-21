<template>
  <div id="app">
    <HaileeSchool ref="school"/>
  </div>
</template>

<script>

import HaileeSchool from './components/HaileeSchool.vue'

// ref属性：
// 1）被用来给元素或子组件注册引用信息（id替代者）
// 2）应用在html标签上获取的是真实DOM元素，用用在组件标签身上是组件实例对象（VC）
// 3)获取方式：this.$refs.xxx

export default {
  name: 'App',
  components: {
    HaileeSchool
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
