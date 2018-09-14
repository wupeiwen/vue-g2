<template>
  <div id="app">
    <g2-demo/>
  </div>
</template>

<script>
import g2Demo from './components/g2Demo.vue'

export default {
  name: 'app',
  components: {
    g2Demo
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
