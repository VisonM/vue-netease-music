<template>
  <cube-slide ref="slide" class="banner" :data="banners" @click="clickBanner">
    <cube-slide-item
      v-for="(item, index) in banners"
      :key="index"
      @click.native="clickBanner(item, index)"
    >
      <a :href="item.url">
        <img :src="item.image" />
      </a>
    </cube-slide-item>
  </cube-slide>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Slide } from "cube-ui";
Vue.use(Slide);

interface BannerItem {
  url: string;
  pic: string;
  id: number;
}
@Component({})
export default class HomeBanner extends Vue {
  banners = [];
  async created() {
    const { banners } = await this.$api.global.getBanner({ type: 2 });
    this.banners = banners.map((item: BannerItem) => ({
      url: item.url,
      image: item.pic
    }));
  }
  clickBanner() {
    console.log("clickBanner");
  }
}
</script>

<style lang="less" scoped>
.banner {
  height: 300px;
  border-radius: 10px;
  margin: 20px 20px;
}
</style>
