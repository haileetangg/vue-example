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
