<template>
  <div class="plate-header">
    <div class="plate-header__left">
      <span class="plate-header__left_label">推荐歌单</span>
      <h6 class="plate-header__left_title">为你精挑细选</h6>
      <slot></slot>
    </div>
    <div class="plate-header__right">
      <span class="v-btn">查看更多</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class HomeBanner extends Vue {
  @Prop(String) readonly label: string | undefined;
  @Prop({ default: "more" }) readonly actionType!: string;
}
</script>

<style lang="less" scoped>
@import "./../../style/variable";
.plate-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 20px;
  &__left {
    &_label {
      color: @label;
      font-size: 18px;
    }
    &_title {
      color: @title;
      font-size: 28px;
      margin-top: 10px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
  &__right {
    &_more {
      font-size: 28px;
      padding: 10;
    }
  }
}
</style>
