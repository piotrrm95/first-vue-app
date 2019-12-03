import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '../views/Search.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
  ],
});
