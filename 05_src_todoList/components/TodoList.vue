<template>
  <div>
    <ul class="todo-main">
      <TodoItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todoObj="todoObj"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
    />
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name:'TodoList',
    components:{
      TodoItem
    },
    props:['todos','checkTodo','deleteTodo']
}
</script>

<style lang="less" scoped>
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}
li{
    list-style: none;
}
.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>