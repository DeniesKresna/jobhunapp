<template>
  <div id="app">
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="isCanCancel"></b-loading>
    <div class="container is-fluid">
        <div v-if="$route.path == '/'">
          <hero-element />
        </div>
        <div v-else>
          <header-element />
        </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import HeaderElement from './components/elements/HeaderElement'
  import HeroElement from './components/elements/HeroElement'
  export default{
    components:{
      HeaderElement, HeroElement
    },
    data(){
      return{
          isFullPage: true,
          isCanCancel: false
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
