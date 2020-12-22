import Vue from  'vue';
import VueRouter from 'vue-router';
import Gooddetail from './components/Gooddetail.vue'
import Goodlist from './components/Goodlist.vue'

Vue.use(VueRouter)

var router  = new VueRouter({
  mode:"hash",
  routes:[
    {
      path:"/goodlist",
      component:Goodlist
    },
    {
      path:"/gooddetail/:id",
      component:Gooddetail
    },
    {
      path:"/",
      redirect:"/goodlist"
    }
  ]
})

export default router;