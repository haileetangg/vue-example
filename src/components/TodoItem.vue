<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)" />
      <!-- 
        如下代码也能实现功能，但是不太推荐，因为违反了props不能修改的原则
      <input type="checkbox" v-model="todoObj.done" /> -->
      <span>{{todoObj.name}}</span>
    </label>
    <button 
      class="btn btn-danger" 
      @click="handleDelete(todoObj.id)"
    >删除</button>
  </li>
</template>

<script>
export default {
  name:'TodoItem',
  props:['todoObj','checkTodo','deleteTodo'],
  methods:{
    handleCheck(id){
      //通知App组件将对应的todoObj对象的done值取反
      this.checkTodo(id)
    },
    handleDelete(id){
      if(confirm('确认删除吗？')){
        console.log(id)
        this.deleteTodo(id)
      }
    }
  }
  
}
</script>

<style lang="less" scoped>
    li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
    /* float: left; */
    cursor: pointer;
}
li label input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}
li button {
    float: right;
    display: none;
    margin-top: 3px;
}
li:before {
    content: initial;
}
li:last-child {
    border-bottom: none;
}
li:hover{
    background-color: #ddd;
}
li:hover button{
    display: block;
}
</style>