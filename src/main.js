import Vue from 'vue'
import App from './App.vue'
import Test from './Test.vue'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    //把render函数指定的组件，渲染到 HTML 页面中
    render: h => h(App),
}).$mount('#app')

new Vue({
    el: '#app2',
    //把render函数指定的组件，渲染到 HTML 页面中
    render: h => h(Test),
}).$mount('#app2')