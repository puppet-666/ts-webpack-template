<template>
  <div class="tree">
    <div
      class="box"
      @click="toggle()"
    >
      <div :class="['lt', getClassName()]" />
      <div class="label lt">{{ item.label }}</div>
    </div>
    <div v-show="isOpen" class="drop-list">
      <template v-for="(child, index) in item.children">
        <Tree :key="index" :item="child" />
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'

type TreeType = {
  label: string,
  children:Array<TreeType>
}

@Component({
  components: {
    Tree
  }
})
export default class Tree extends Vue {
  @Prop() item:TreeType
  isOpen: boolean = false
  toggle() {
    this.isOpen = !this.isOpen
  }
  getClassName() {
    return this.isOpen ? 'down' : 'right'
  }
}
</script>

<style lang='scss' scoped>
.box{
  display: flex;
  justify-content: center;
  align-items: center;
}
.down{
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top: 5px solid black;
}
.right{
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-left: 5px solid black;
}
</style>
