<template>
    <div>
       <h1 @click="showName"> hello,欢迎来到{{name}}!</h1>
    </div>
</template>

<script>
export default {
    name:'SchoolHailee',
    data(){
        return {
            name:'西华大学',
        }
    },
}
</script>

<style lang="">
    
</style>