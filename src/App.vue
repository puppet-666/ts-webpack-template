<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { HelloWorld } from '@/components'

@Component({
  components: {
    HelloWorld
  }
})
export default class AppComponent extends Vue {

}
</script>

<style lang='scss' scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif, "Microsoft YaHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
