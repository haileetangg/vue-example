<template>
      <div class='todo-container'>
        <div class='todo-wrap'>
          <TodoHeader 
            :addTodo="addTodo"
          />
          <TodoList 
            :todos="todos" 
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
          />
          <TodoFooter 
            :todos="todos" 
            :checkAllTodo="checkAllTodo"
            :clearAllTodo="clearAllTodo"
          />
        </div>
      </div>
</template>
<script>

import TodoHeader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'
import TodoList from './components/TodoList'

export default {
  name:'App',
  components:{
    TodoHeader,
    TodoFooter,
    TodoList,
  },
   data(){
      return {
        todos:[
          {id:'001',name:'抽烟',done:true},
          {id:'002',name:'喝酒',done:false},
          {id:'003',name:'开车',done:true}
        ]
      }
  },
  methods:{
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id == id) 
        todo.done = !todo.done
        return
      })
    },
    //删除一个todo
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    //全选或者取消全选
    checkAllTodo(done){
      // 这个写法太冗余了
      // if(done){
      //   this.todos = this.todos.map((todo) => {return {...todo,done:true}})
      // }else{
      //   this.todos = this.todos.map((todo) => {return {...todo,done:false}})
      // }
      // 用下面这个写法吧
      this.todos.forEach(todo=>{
        // todo的所有done属性都听done的
        todo.done = done
      })
    },
    clearAllTodo(){
      this.todos = this.todos.filter(todo=>{
        return !todo.done
      })
    }
  }
}

</script>
<style lang="less">
body {
    background-color: #fff;
}
.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,.005);
    border-radius: 4px;
}
.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border:1px solid #bd362f;
}
.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}
.btn:focus {
    outline: none;
}
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>