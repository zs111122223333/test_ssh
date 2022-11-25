<template>
    <div id="app2" class="test-box">
        <h1>这是用户自定义的 Test.vue---{{username}}</h1>
        <button @click="changeName">修改用户名</button>
    </div>
</template>
<script>
// 默认导出，固定写法
export default {
    //data 数据源
    //.vue 组件中的 data 不能像之前一样，不能指向对象
    //组件中的 data 必须是一个函数
    data(){
        //这个 return 出去的 { } 中，可以定义数据
        return {
           username : '张三'
       }
    },
    methods:{
        //this 表示当前组件的实例对象
        changeName(){
            console.log(this);
            this.username = "李四"
        }
    },
    //当前组件中的侦听器
    watch:{},
    //当前组件中的计算属性
    computed:{},
    //当前组件中的的过滤器
    filters:{}
}
</script>
<style lang="less">
    .test-box{
        background-color: pink;
        button{
            color: red;
        }
    }
</style>