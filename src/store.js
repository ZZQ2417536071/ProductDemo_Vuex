import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

var store = new Vuex.Store({
  //当我们调用了mutations中的方法之后，才会把修改后的数据存到localstorage
  plugins: [createPersistedState()],
  state: {
    products: [
      {
        id: 100,
        name: "华为mate30",
        price: 5000,
        num: 100,
        img:
          "https://ae01.alicdn.com/kf/H8607cd38aabb4707b2cfadb2cbf60624H.jpg",
        comments: [
          {
            name: "江小白",
            content: "支持国货",
            ctime: new Date(),
          },
          {
            name: "李三立",
            content: "Mate30系列会为我们带来更加震撼的夜拍实力",
            ctime: new Date(),
          },
        ],
      },
      {
        id: 101,
        name: "三星s20",
        price: 5050,
        num: 10,
        img:
          "https://ae01.alicdn.com/kf/H3c15d3ab3fe647719f65e116b4de0f22F.jpg",
        comments: [
          {
            name: "张三丰",
            content: "精美的画质",
            ctime: new Date(),
          },
          {
            name: "胡一刀",
            content:
              "外形外观：大气上档次屏幕音效：拍照时有闪屏，声音不是很大。拍照效果：还可以吧。运行速度",
            ctime: new Date(),
          },
        ],
      },
    ],
  },
  mutations: {
    commitComment(state,payload){
      var good = state.products.find(item=>{
        if(item.id == payload.id){
          return item;
        }
      })
      good.comments.push(payload.content)
    }
  },
});

export default store;
