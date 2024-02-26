<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'TodoHeader',
    methods:{
      add(e){
        if(!e.target.value) return alert('输入不能为空！')
        //将用户的输入包装成一个todo对象
        const todoObj = {id:nanoid(),name:e.target.value,done:false}
        console.log(todoObj,'todoObj')
        //通知App组件去添加一个todo
        this.$emit('addTodo',todoObj)
        //清空输入
        e.target.value = ''
      }
    }
}
</script>

<style lang="less" scoped>
.todo-header input {
    width: 560px;
    margin: 0 auto;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    padding: 4px 7px;
}
.todo-header input:focus {
    outline: none;
    border-color: rgba(82,168,236,0.8);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6);
}
</style>