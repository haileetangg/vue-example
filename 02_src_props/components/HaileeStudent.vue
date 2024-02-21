<template>
    <div>我是{{name}},我今年{{age}}岁了</div>
</template>

<script>
// props: 让组件接收外部传过来的数据
//   1）传递数据
//       <Demo name="xxx" />
//   2)接收数据
//      第一种方式（只接收）：
//          props:['name']          
//      第二种方式（限制类型）：
//          props:{
//             name:String
//          }
//      第三种方式（限制类型、限制必要性、指定默认值）
//          props:{
//            name:{
//               type:String,
//               required: true,
//            }
//          }
//    备注：props是只读的，vue底层会监测你对props的修改，如果进行了修改，就会发出警告，如果需要修改可以复制一份到data里面
export default {
  name:'HaileeStudent',
  data(){
    return {}
  },
  props:['name','age']
}
</script>

<style>

</style>