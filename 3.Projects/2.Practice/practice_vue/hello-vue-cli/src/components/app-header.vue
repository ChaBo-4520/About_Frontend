<template>
  <div id="nav-bar">
    <div id="logo">
      <h1>차보람</h1>
    </div>
    <ul id="menu">
      <li class="nav-button">Vue 실습 목록1</li>
      <li class="nav-button">Vue 실습 목록2</li>
    </ul>
    <ul id="sns">
      <li>
        <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
        <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  list-style: none;
}
#nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0.75em;
}
#nav-bar > #menu {
  display: flex;
  padding-left: 0;
}
#nav-bar > #menu > li {
  cursor: pointer;
  padding: 0.5em 0.75em;
}
#nav-bar > #menu > li:hover {
  background-color: #80d8ff;
}
#nav-bar > #sns {
  font-size: 1.5em;
}
</style>
