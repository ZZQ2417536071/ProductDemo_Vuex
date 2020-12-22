
<template>
    <div class="list">
      <ul>
        <router-link v-for="item in products" :key="item.id" tag="li" class="item" :to="`/gooddetail/${item.id}`">
          <span class="left">
            {{ item.id }}
          </span>
          <span class="right">
            {{ item.name }}
          </span>
        </router-link>
      </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  created() {
    
  },
  computed: {
    ...mapState(['products'])
  },
};
</script>

<style lang="less">
* {
  margin: 0px;
  padding: 0px;
}
.list {
  width: 500px;
  margin: 30px auto;
  border: 1px solid pink;
  .item {
    padding: 10px;
    border-bottom: 1px dashed gray;
  }
}
</style>