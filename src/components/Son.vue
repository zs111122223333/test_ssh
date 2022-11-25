<template>
  <div>
      
      <h4>user 的值是：{{ user }}</h4>
      <button @click="msg = 'abc'">修改 msg</button>
      <button @click="user.name = 'zs'">修改 user</button>
      <h4>msg 的值是：{{ msg }}</h4>
      <hr>
      <button @click="add">修改 soncount的值：{{soncount}}</button>
  </div>
</template>

<script>
export default {
    props:['msg','user'],
    data(){
      return{
        //子组件自己的数据，将来希望把值传给父组件
        soncount:0
      }
    },
    methods:{
      add(){
        this.soncount += 1
        //修改数据时，通过 $emit() 触发自定义事件
        this.$emit('numchange',this.soncount)
      }
    }
}
</script>

<style>

</style>