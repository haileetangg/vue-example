export default {
    install(Vue){
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        }),
        Vue.directive('fbind',{
            bind(element,binding){
                element.value = binding.value
            },
            inserted(element){
                element.focus()
            },
            update(element,binding){
                element.value = binding.value
            }
        })
        Vue.mixin({
          data(){
            return {
                x:99,
                y:101
            }
          }
        })
        Vue.prototype.hello = ()=>{console.log('你好啊')}
    }
}