# my-vue-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 混入（合）

mixin：
    功能：可以把多个组件共用的配置提取成一个混入对象
       使用方式：
          第一步定义混合，例如：
            {
               data(){....},
               methods(){....},
               .....
             }
          第二步使用混合，例如：
            1）全局混入：Vue.mixin(xxx)
            2)局部混入：mixins:['xxx']

##  插件

功能：用于增强Vue

本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据

定义插件：

```javascript
const plugins = {
  install(){
    //1.添加全局过滤器
    Vue.filter(...)
    //2.添加全局的指令
    Vue.directive(...)
    //3.配置全局混入（合）
    Vue.mixin(...)
    //4.添加实例方法
    Vue.prototype.$myMethods = function(){...}
    Vue.prototype.$myProperty = xxx
  }
}
// 使用插件：Vue.use(plugins)
```

### scoped

作用：让样式在局部生效，防止冲突

写法：<style scoped>

### webStorage

1. 存储大小一般在5M左右，不同浏览器不一样
2. 浏览器听过window.sessionStorage跟window.localStorage属性来实现本地存储机制
3. 相关API：

```javascript
// 该方法接受一个键值作为参数，会把键值对添加到存储中，如果键名存在则更新其对应的值
xxxxStroage.setItem('key','value')
// 键名作为参数，返回键名对应的键值
xxxxStorage.getItem('key')
// 键名作为参数，删除键值对
xxxxStorage.removeItem('key')
// 清空存储中的所有数据
xxxxStorage.clear()

```

4. 备注：

   1）SessionStroage存储的内容会随着浏览器窗口关闭而消失

   2）LocalStorage存储的内容需要手动清除才会消失

   3）xxxxStorage.getItem(xxx)如果对应的value获取不到，那么getitem的返回值为null

   4）JSON.parse(null)的结果依然是null

### 组件的自定义事件

1. 一种组件间通信的方式，适用于：子组件 ===> 父组件
2. 适用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
3. 绑定自定义事件：

   1）第一种方式，在父组件中：<Demo @showHailee="test"/> 或 <Demo v-on:showHailee="test"/>

   2）第二种方式，在父组件中：

```javascript
<Demo ref="demo"/>
.....
methods:{
  test(){
    console.log("I'm the test")
  }
}
mounted(){
  this.$refs.demo.$on('showHailee',this.test)
}
```

4. 触发自定义事件：this.$emit('showHailee'，数据)
5. 解绑自定义事件：this.$off('showHailee')
6. 组件上可以绑定原生DOM事件，需要使用native修饰符
7. 注意：通过this.$refs.xxx.$on('showHailee',回调)绑定自定义事件时，回调要么配置在methods中，要么使用箭头函数，否则this指向会出问题！
