<template>
    <div>
        <h1 @click="showName">hello,我是{{name}}</h1>
    </div>
</template>
<script>
export default{
  name:'StudentHailee',
  data(){
    return {
      name:'hailee',
      age:25
    }
  },
}
</script>
<style lang="less">
    
</style>