<template>
    <div class="test-container">
        <h3 id="mytest2">Test2.vue 组件</h3>
        <div id="msg">message 的值是：{{message}}</div>
        <button @click="message += ' AAA'">修改 message 的值</button>
    </div>
</template>
<script>
export default {
    props:['info'],
    data(){
        return{
            message:'hello vue.js'
        }
    },
    methods:{
        show(){
            console.log('调用了 Test 组件的show方法');
        }
    },
    //创建阶段的第1个生命周期函数
    beforeCreate(){
        // console.log('beforeCreate');
        // console.log(this.info);
        // console.log(this.message);
        // this.show()
    },
    created(){
        //created 生命周期函数，非常常用
	    //经常在它里面，调用 methods 中的方法，使用Ajax请求服务器的数据
	    //并且，把请求到的数据，转存到data中，供template模板渲染的时候使用
        // console.log(this.info);
        // console.log(this.message);
        // this.show()
        console.log('created');
        const dom = document.querySelector('#mytest2')
        console.log(dom);
    },
    beforeMount(){
        console.log('beforeMount');
        const dom = document.querySelector('#mytest2')
        console.log(dom);
    },
    mounted(){
        console.log('mounted');
        const dom = document.querySelector('#mytest2')
        console.log(dom);
    },
    beforeUpdate(){
        console.log('beforeUpdate');
        console.log(this.message);
        const dom = document.querySelector('#msg')
        console.log(dom.innerHTML);
    },
    //当数据变化后，为了能够操作到最新的 DOM 结构，必须把代码写到 updated 生命周期函数中
    updated(){
        console.log('updated');
        console.log(this.message);
        const dom = document.querySelector('#msg')
        console.log(dom.innerHTML);
    },
    beforeDestroy(){
        console.log('beforeDestroyed');
        console.log(this.message);
    },
    destroyed(){
        // console.log('destroyed');
        // console.log(this.message);
        // const dom = document.querySelector('#msg')
        // console.log(dom.innerHTML);
    }
}
</script>
<style lang="less" scoped>
.test-container{
    background-color: pink;
    height: 200px;
}
</style>