<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from './components/Tabbar_bookshelf';
export default {
  data(){
    return{

    }
  },
  components:{
    Tabbar
  }
}
</script>

<style lang="scss">

</style>
