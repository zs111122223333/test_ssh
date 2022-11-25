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
</style>