<template>
  <div>
    <div>树形递归组件</div>
    <template v-for="(item, index) in dataSource">
      <Tree :key="index" :item="item" />
    </template>
    <div />
  </div></template>

<script lang='ts'>
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import Tree from './Tree.vue'
import cloneDeep from 'lodash/cloneDeep'

type TreeType = {
  label: string,
  children:Array<TreeType>
}
@Component({
  components: {
    Tree
  }
})
export default class TreeComponent extends Vue {
@Prop() data:TreeType

@Watch('data')
ondataChange(val:TreeType) {
  console.log(val)
}

get treeData() {
  return cloneDeep(this.data)
}
get dataSource() {
  if (Array.isArray(this.treeData)) {
    return this.treeData
  } else {
    return [this.treeData]
  }
}
}
</script>

<style lang='scss' scoped>
</style>
