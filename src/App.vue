<template>
  <div id="app" class="app-container">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>App 根组件</h1>
    <button @click="flag =! flag">Toggle Flag</button>
      <Test2 info="你好" v-if="flag"></Test2>
    <hr>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 以标签形式使用注册好的组件 -->
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>
<script>
//导入需要使用的 .vue组件
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Test2 from '@/components/Test2.vue'
export default {
  data(){
    return{
      flag: true
    }
  },
  //注册组件
  components:{
    Left,
    Right,
    Test2
  }
}
</script>
<style lang="less">
.app-container{
  padding: 1px 20px 20px;
  background-color:#efefef;
  .box{
    display: flex;
  }
}

</style>