<template>
  <div class="wrapper">
    <ul>
      <li v-for="(item,index) in list" :key="index">
          {{item}}
      </li>
    </ul>
    <infinite-loading :distance="distance" @infinite="infiniteHandler" ref="infiniteLoading">
      <!-- <div slot="spinner">小弟拼命加载中...</div>-->
      <v-loading slot="spinner"></v-loading>
      <div slot="no-more">已加载完毕!</div> 
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import vLoading from '@/components/loading.vue'
export default {
  components: {
    InfiniteLoading,
    vLoading
  },
  props: {},
  data() {
    return {
      list: [],
      distance: 10
    }
  },
  watch: {},
  computed: {},
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = []
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i)
        }
        this.list = this.list.concat(temp)   // 拼接数组
        // this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        $state.loaded()   // 当前加载
        if(this.list.length === 40){
            $state.complete()   // 整个完成(停止加载)
            // this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
        }
      }, 1000)
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
</style>