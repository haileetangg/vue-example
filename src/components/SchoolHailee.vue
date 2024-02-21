<template>
    <div>
       <h1 @click="showName"> hello,欢迎来到{{name}}!</h1>
       <input type="text" v-fbind='name'>
    </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    name:'SchoolHailee',
    data(){
        return {
            name:'西华大学',
        }
    },
    mixins:[mixin]
}
</script>

<style lang="">
    
</style>