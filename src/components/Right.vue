<template>
    <div class="right-container">
        <h3>Right 组件</h3>
        <hr>
        <MyCount :init="9"></MyCount>
    </div>
</template>
<style lang="less" scoped>
    .right-container{
        padding: 0 20px 20px ;
        background-color: lightblue;
        width: 200px;
        min-height: 100px;
        flex: 1;
    }
    h3{
        color: blue;
    }
    // /deep/ 样式穿透
	// 当修改第三方组件库中组件的默认样式时，需要用到 /deep/
	// /deep/ 需要和 scoped 同时使用才会生效
	// 原理 ：/deep/ 会使子组件样式也产生    data-v-特定唯一值	
    /deep/ h5{
        color: aqua;
    }
</style>