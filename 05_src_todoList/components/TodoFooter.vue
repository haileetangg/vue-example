<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"> -->
      <input 
        type="checkbox" 
        v-model="isAll"
      >
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default{
  name:'TodoFooter',
  props:['todos','checkAllTodo','clearAllTodo'],
  data(){
    return {
      name:'hailee',
      age:25
    }
  },
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      // let count = 0
      // this.todos.forEach(e => {
      //   if(e.done) count++
      // });
      // return count
      // reduce用于条件统计非常好
      return this.todos.reduce((pre,cur)=>{
        return pre + (cur.done ? 1:0)
      },0)
    },
    // 简写写法
    // isAll(){
    //   return this.total === this.doneTotal && this.total>0
    // },
    //完整版的写法
    isAll:{
      get(){
        return this.total === this.doneTotal && this.total>0 
      },
      set(value){
        this.checkAllTodo(value)
      }
    }
  },
  methods:{
    checkAll(e){
      this.checkAllTodo(e.target.checked)
    },
    clearAll(){
      console.log('-----')
      this.clearAllTodo()
    }
  }
}
</script>
<style lang="less" scoped>
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}
.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}
.todo-footer button{
    float: right;
    margin-top: 5px;
}
</style>