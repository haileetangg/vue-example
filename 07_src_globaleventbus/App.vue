<template>
    <div>
        <StudentHailee /><hr />
        <SchoolHaileeVue />
    </div>
</template>
<script>
import SchoolHaileeVue from './components/SchoolHailee.vue'
import StudentHailee from './components/StudentHailee.vue'

export default {
  name:'App',
  components:{
    StudentHailee,
    SchoolHaileeVue
  },
  data(){
    return {
         
    }
  }

}

</script>
<style lang="less">
    
</style>