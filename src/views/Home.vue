<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>home页面</h1>

    <div>
      <button class="btn" @click="btnClick">点击获取数据</button>
    </div>

    <div v-for="item in imgList">
      <img class="img" v-lazy="item" />
    </div>
  </div>
</template>

<script>
import { getImage } from '@/api/home.js'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      imgList: [
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg',
        'http://n.sinaimg.cn/ent/transform/183/w725h1058/20200426/6eed-isuiksn2183688.jpg'
      ]
    }
  },
  methods: {
    async btnClick() {
      // 跨域请求获取图片地址
      try {
        let res = await getImage()
        let target = []
        res.subjects.forEach(v => {
          target.push(v.images.large)
        })

        // this.imgList = target
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>


<style lang="less" scoped>
.btn {
  border: 1px solid #000;
}

.img {
  width: 270px;
  height: 400px;
}
</style>
