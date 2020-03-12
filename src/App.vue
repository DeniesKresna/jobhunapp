<template>
  <div id="app">
    <div class="page-loading" v-show="isLoading">
      <img src="./assets/images/loader.gif" alt="" />
      Loading...
    </div>
    <HeaderElement />
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
  </div>
</template>
<script>
  import HeaderElement from './components/elements/HeaderElement'
  export default{
    components:{
      HeaderElement
    },
    data(){
      return{

      }
    },
    computed:{
      isLoading() {
        return this.$store.getters.isLoading;
      }
    }
  }
</script>

<!--
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>-->
