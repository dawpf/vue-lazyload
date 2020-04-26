import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueLazyload from "vue-lazyload"

Vue.use(VueLazyload, {
  error: 'http://a2.att.hudong.com/36/48/19300001357258133412489354717.jpg',
  // loading: 'http://img.zcool.cn/community/0195f55972f18ca8012193a342310a.gif',
  loading: require('./assets/lazy.gif')// 懒加载使用的图片
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
