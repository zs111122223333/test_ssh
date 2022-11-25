<template>
    <button @click="sendMsg">给兄弟组件传值</button>
</template>

<script>
//1.导入 eventBus.js 模块
import bus from './eventBus.js'

export default {
    data(){
        return{
            msg:'AAABBB'
        }
    },
    methods:{
        sendMsg(){
            //2.通过 eventBus 来发送数据
            bus.$emit('share',this.msg)
        }
    }
}
</script>

<style>

</style>