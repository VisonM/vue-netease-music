<template>
  <div>
    <p @click="handleClick">{{ item.value }}</p>
    <p @click="handleAdd">count:{{ count }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
    handleAdd() {
      this.count++;
    }
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style></style>
