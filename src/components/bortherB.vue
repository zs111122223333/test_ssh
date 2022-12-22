<template>
    <div>兄弟组件传值：{{msgFromLeft}}</div>
</template>

<script>
//1.导入 eventBus.js 模块
import bus2 from './eventBus.js'

export default {
    data(){
        return{
            msgFromLeft:''
        }
    },
    created(){
        //2.为bus绑定自定义事件
        bus2.$on('share',val=>{
            this.msgFromLeft = val
        })
    }
}
</script>

<style>

</style>