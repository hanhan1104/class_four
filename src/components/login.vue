<template>
  <div class="hello">
      <input type="text" v-model="obj.account">
      <input type="text" v-model="obj.password">
      <input type="text" v-model="obj.usermail">
      <button @click="login"> 登录  </button>
  </div>
</template>

<script>
import {login} from '@/api/login'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj:{}
    }
  },
  methods:{
    login(){
      login(this.obj).then(res=>{
        console.log(res)
      }).cath(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  width:100%;
  height: 100vh;
}
</style>
