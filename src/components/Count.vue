<template>
  <div>
      <h5>Count 组件</h5>
      <p>count 的值是：{{count}}</p>
      <button @click="add">+1</button>
      <button @click="show">打印 this 的值</button>
  </div>
</template>

<script>
export default {
  //props 是自定义属性，允许使用者通过自定义属性为当前组件指定初始值
  //自定义的名字，是封装者自定义的
  //props 中的数据，可以直接在模板结构中被使用
  //props 是只读的，不能直接修改,想要修改就把值转存到 data 中
  // props:['init'],
  props:{
    //自定义属性A ：{/* 配置选项 */}，
    //自定义属性B ：{/* 配置选项 */}，
    //自定义属性C ：{/* 配置选项 */}，
    init:{
      //用 default 来定义属性的默认值
      default:0,
      //type 属性定义属性的值类型
      //如果传递过来的值不符合，则会在终端报错
      type:Number,
      //必填项校验
      required:true
    }
  },
  //组件的私有属性
  data(){
    return{
      count:this.init
    }
  },
  methods:{
    add(){
      this.count += 1
    },
    show(){
      console.log(this);
    }
  }
}
</script>

<style lang="less">

</style>