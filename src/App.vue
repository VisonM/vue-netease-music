<template>
  <div id="app">
    <keep-alive>
      <!-- <transition name="slide-left">
        <router-view class="container" />
      </transition> -->
      <router-view class="container" />
    </keep-alive>
    <div class="tabbar">
      <router-link
        v-for="(item, index) in tabbar"
        :key="index"
        :to="`${item.link}`"
        class="tabbar__item"
      >
        {{ item.text }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabbar: [
        {
          icon: "/",
          text: "发现",
          link: "/"
        },
        {
          icon: "/video",
          text: "视频",
          link: "/video"
        },
        {
          icon: "/personal",
          text: "我的",
          link: "/personal"
        },
        {
          icon: "/yuncun",
          text: "云村",
          link: "/yuncun"
        },
        {
          icon: "/account",
          text: "账号",
          link: "/account"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s;
}
.slide-left-enter, .slide-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(100%, 0, 0);
}

.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 750px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom);
  padding-bottom: constant(safe-area-inset-bottom);
  backdrop-filter: blur(20px);
  background: hsla(0, 0%, 100%, 0.75);
  &__item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #262626;
    text-decoration: none;
    &.router-link-active {
      color: #ff0909;
    }
  }
}
</style>
