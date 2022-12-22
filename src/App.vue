<template>
  <div id="app" class="app-container">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="showthis">打印this</button>
    <Son :msg="message" :user="userinfo" @numchange="getSonCount"></Son>
    <h4>父组件接受子组件的值：{{countFromSon}}</h4>
    <hr>
    <BortherA></BortherA>
    <BortherB></BortherB>
    <hr>
    <button @click="flag =! flag">Toggle Flag</button>
      <Test2 info="你好" v-if="flag"></Test2>
    <hr>
    <input type="text" v-if="inputVisible" @blur="showButton" ref="iptRef" />
    <button v-else @click="showInput">展示输入框</button>
    <button @click="countreset">重置Left中Conut的值</button>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 以标签形式使用注册好的组件 -->
      <Left ref="appleft"></Left>
      <Right></Right>
    </div>
  </div>
</template>
<script>
//导入需要使用的 .vue组件
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Test2 from '@/components/Test2.vue'
import Son from '@/components/Son.vue'
import BortherA from '@/components/bortherA.vue'
import BortherB from '@/components/bortherB.vue'
export default {
  data(){
    return{
      flag: true,
      message:'父组件的信息',
      userinfo:{name:'wsc',age:18},
      //定义 countFromSon 来接受子组件传来的值
      countFromSon:0,
      inputVisible:false
    }
  },
  //注册组件
  components:{
    Left,
    Right,
    Test2,
    Son,
    BortherA,
    BortherB
  },
  methods:{
    getSonCount(val){
      this.countFromSon = val
    },
    showthis(){
      console.log(this.$refs.myh1);
      this.$refs.myh1.style.color = 'red'
    },
    countreset(){
      console.log(this.$refs.appleft);
      // this.$refs.appleft.$refs.mycount.resetCount()
      this.$refs.appleft.$refs.mycount.count = 0
    },
    showInput(){
      //1.切换布尔值，把文本框展示出来
      this.inputVisible = true
      //2.让展示出来的文本框，自动获取焦点
      this.$nextTick(()=>{
        this.$refs.iptRef.focus()
      })
    },
    showButton(){
      this.inputVisible = false
    }
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