<template>
  <div class="wrapper">
    <div @click="goToContent" class="content">
      <span>{{ content.title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    example: Object,
  },
  data() {
    return {
      content: {
        title: this.example.title,
        url: this.example.name,
      },
    };
  },
  methods: {
    goToContent() {
      this.$router.push(this.content.url);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.content {
  height: 90%;
  width: 90%;
  border-radius: 2%;
  border: solid 1px black;
  box-shadow: 0.25em 0.25em 0.5em 0.125em black;
  background-color: white;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 3%;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--animation-duration) ease;
}
.content:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.content > span {
  font-size: 1.5em;
  text-align: center;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
