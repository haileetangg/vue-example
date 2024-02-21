<template>
    <div>
        <h1 @click="showName">hello,我是{{name}}</h1>
    </div>
</template>
<script>
import { mixin } from '../mixin'
export default{
  name:'StudentHailee',
  data(){
    return {
      name:'hailee',
      age:25
    }
  },
  // mixin：
  //   功能：可以把多个组件共用的配置提取成一个混入对象
  //      使用方式：
  //         第一步定义混合，例如：
  //           {
  //              data(){....},
  //              methods(){....},
  //              .....
  //            }
  //         第二步使用混合，例如：
  //           1）全局混入：Vue.mixin(xxx)
  //           2)局部混入：mixins:['xxx']
  mixins:[mixin]
}
</script>
<style lang="">
    
</style>