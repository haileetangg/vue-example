<template>
  <div class="school_box">
    <h1>你好，我的英文名是{{myName}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HaileeSchool',
  props: {
    msg: String
  },
  data(){
    return{
      myName:'Hailee'
    }
  }
}
</script>

<style scoped>
.school_box{
  color:red;
}
</style>
