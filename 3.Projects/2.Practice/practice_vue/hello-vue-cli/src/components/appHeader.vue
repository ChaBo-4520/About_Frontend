<template>
  <div id="nav-bar">
    <div id="logo" @click="goHome">
      <span>
        <font-awesome-icon :icon="['fab', 'vuejs']"></font-awesome-icon>
      </span>
    </div>
    <ul id="menu">
      <li
        v-for="(menu, idx) in navList"
        :key="idx"
        @click="goMenu(idx)"
        class="nav-button"
        :class="{ on: selectedMenu[idx + 1] }"
      >
        {{ menu.title }}
      </li>
    </ul>
    <ul id="sns">
      <li
        v-for="(snsInfo, idx) in snsInfoArray"
        :key="idx"
        @click="goSns(snsInfo.url)"
      >
        <font-awesome-icon :icon="snsInfo.icon"> </font-awesome-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      selectedMenu: [1, 0, 0],
      snsInfoArray: [
        {
          icon: ["fab", "instagram"],
          url: "https://www.instagram.com/from.boram_/",
        },
        {
          icon: ["fas", "code"],
          url: "https://www.acmicpc.net/user/ckqhfka4520",
        },
        {
          icon: ["fab", "github"],
          url: "https://github.com/ChaBo-4520",
        },
      ],
    };
  },
  methods: {
    goHome() {
      // router를 import하고 router.push()
      this.$router.push({ name: "Home" });
      this.selectedMenu = [0, 0, 0];
      this.selectedMenu[0] = 1;

      // Vuerouter 인스턴스를 router라는 변수명으로 선언했기 떄문에 this.$router로 접근할 수 있다.
    },
    goMenu(idx) {
      this.selectedMenu = [0, 0, 0];
      this.$router.push(this.navList[idx].url);
      this.selectedMenu[idx + 1] = 1;
    },
    goSns(url) {
      window.open(url);
    },
  },
  computed: {
    ...mapState("main", ["navList"]),
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
#nav-bar > #menu > li.on {
  color: var(--primary-color);
}
#nav-bar > #menu > li.on::after {
  width: 100%;
}
#nav-bar > #sns {
  font-size: 1.5em;
  display: flex;
}
#sns > li {
  font-size: 2em;
  margin: 0 0.25em;
  cursor: pointer;
}
</style>
