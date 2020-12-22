<template>
  <div>
    <div class="product">
      <p>商品id:{{ currentProduct.id }}</p>
      <p>商品名字:{{ currentProduct.name }}</p>
      <p>商品价格:{{ currentProduct.price }}</p>
      <p>商品图片:<img :src="currentProduct.img" /></p>
      <p>商品库存:{{ currentProduct.num }}</p>
    </div>
    <div class="commentlist">
      <ul>
        <li v-for="item in currentProduct.comments" :key="item.content">
          {{ item.name }} ----> {{ item.content }}
        </li>
      </ul>
    </div>
    <div class="commentbox">
      <Cmtbox @func="receiveFromChild"></Cmtbox>
    </div>
  </div>
</template>

<script>
import Cmtbox from "./Cmtbox.vue";
import { mapState,mapMutations } from 'vuex';

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState(['products']),
    currentProduct() {
      return this.products.find((item) => {
        if (item.id == this.id) {
          return item;
        }
      });
    },
  },
  components: {
    Cmtbox,
  },
  methods: {
    //将mutations映射到当前组件，就可以直接将mutation当成普通方法来调用了，无需再this.$store.commit()
    ...mapMutations(['commitComment']),
    receiveFromChild(obj) {
      //包装一个对象用于表示当前的评论数据是针对于哪个商品
      var data = {
        content:obj,   //评论数据
        id:this.currentProduct.id   //商品id
      }
      this.commitComment(data)
    },
  },
};
</script>

<style lang="less">
.product,
.commentlist,
.commentbox {
  padding: 10px;
  width: 500px;
  margin: 30px auto;
  border: 1px solid pink;
  img {
    width: 80%;
  }
}
</style>