<template>
  <div class="wrapper">
    <ul  v-infinite-scroll="load" style="overflow:auto">
      <li v-for="i in count" :key="i">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      count: 0
    }
  },
  watch: {},
  computed: {},
  methods: {
    load() {
    console.log('load')
      this.count += 1
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
ul{
    background-color: #ccc;
    height: 300px;
}
ul li{
    height: 20px;
    margin: 10px;
    background-color: #1acd7e;
}
</style>