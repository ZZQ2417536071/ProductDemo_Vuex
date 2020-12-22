<template>
  <div>
    <div>
      <label for="">评论人:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="">评论内容:</label>
      <textarea type="text" v-model="content" />
    </div>
    <div>
      <input type="button" value="提交" @click="postComment" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      content: "",
    };
  },
  methods: {
    postComment() {
      if (this.name && this.content) {
        var obj = {
          name: this.name,
          content: this.content,
        };
        this.$emit("func",obj)
      }
    },
  },
};
</script>