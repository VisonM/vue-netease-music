<template>
  <div>
    <PlateHeader />
    <Test
      v-for="(item, index) in renderItem"
      :key="item.id"
      :item="item"
      @click="setItem"
    >
      <span
        >{{ index === item.id }} --- {{ index }} , {{ item.id }} ---
        {{ getName(item) }}</span
      >
    </Test>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PlateHeader from "@/components/basic/plate-header.vue";
import Test from "@/components/basic/test.vue";

@Component({
  components: {
    PlateHeader,
    Test
  }
})
export default class HomeBanner extends Vue {
  renderItem = [
    { value: "zxc", id: 0 },
    { value: "asd", id: 1 }
  ];
  async created() {
    try {
      const { recomend } = await this.$api.user.getRecommendSongList();
      console.log(recomend);
    } catch (e) {
      console.log("custom error", e);
    }
  }
  getName(item = {}) {
    console.log("get item", item);
    return item.value;
  }
  setItem() {
    // this.renderItem[0] = { value: "asdad" };
    // this.renderItem[0].value = Math.random();
    this.renderItem = this.renderItem.reverse();
    // this.renderItem = [
    //   { value: Math.random().toFixed(4) },
    //   { value: Math.random().toFixed(4) }
    // ];
  }
}
</script>

<style lang="less" scoped></style>
