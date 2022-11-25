<template>
    <div class="left-container">
        <h3>Left 组件</h3>
        <hr>
        <MyCount :init="7"></MyCount>
    </div>
</template>
<style lang="less" scoped>
    .left-container{
        padding: 0 20px 20px ;
        background-color: pink;
        width: 200px;
        min-height: 100px;
        flex: 1;
    }
    h3{
        color: red;
    }
</style>