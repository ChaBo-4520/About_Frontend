<template>
  <div id="nav-bar">
    <div id="logo" @click="goHome">
      <span>
        <font-awesome-icon :icon="['fab', 'vuejs']"></font-awesome-icon>
      </span>
    </div>
    <ul id="menu">
      <li class="nav-button" @click="goVue1">Vue 실습 목록1</li>
      <li class="nav-button" @click="goVue2">Vue 실습 목록2</li>
    </ul>
    <ul id="sns">
      <li>
        <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goHome() {
      console.log("클릭!");
      // router를 import하고 router.push()
      this.$router.push("/");

      // Vuerouter 인스턴스를 router라는 변수명으로 선언했기 떄문에 this.$router로 접근할 수 있다.
    },
    goVue1() {
      // this.$router.push({ name: "slotParent" });
      this.$router.push("slotParent");
    },
    goVue2() {
      this.$router.push("exDashBoard");
    },
  },
};
</script>

<style scoped>
#nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75em;
  border-bottom: solid 1px black;
}
#nav-bar > #logo {
  cursor: pointer;
  font-size: 5em;
  text-align: center;
  box-sizing: border-box;
  padding-left: 1rem;
  color: var(--dark-primary-color);
}
#nav-bar li {
  list-style: none;
}
#nav-bar > #menu {
  display: flex;
  padding-left: 0;
  justify-content: space-around;
}
#nav-bar > #menu > li {
  font-weight: bolder;
  position: relative;
  cursor: pointer;
  padding: 0.5em 0.75em;
  margin-top: 2.5em;
  margin-left: 1.25em;
  margin-right: 1.25em;
  bottom: -1em;
  color: var(--light-font-color);
}
#nav-bar > #menu > li::after {
  content: "";
  position: absolute;
  border-bottom: 6px solid var(--primary-color);
  height: 5px;
  width: 0%;
  bottom: 0;
  z-index: 1;
  transition: all 0.5s ease-out;
  transform: translateX(-50%);
  left: 50%;
}
#nav-bar > #menu > li:hover {
  color: var(--primary-color);
}
#nav-bar > #menu > li:hover::after {
  width: 100%;
}
#nav-bar > #sns {
  font-size: 1.5em;
  display: flex;
}
#nav-bar > #sns > ul {
}
#sns > li {
  font-size: 2em;
  margin: 0 0.25em;
}
</style>
