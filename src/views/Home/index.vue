<script>
import HomeBanner from "./components/banner.vue";
import RecommendSongList from "./components/recommend-song-list.vue";
export default {
  data() {
    return {};
  },
  components: {
    HomeBanner,
    RecommendSongList
  },
  render() {
    return (
      <div>
        <HomeBanner />
        <RecommendSongList />
      </div>
    );
  }
};
</script>
<style lang="less" scoped></style>
