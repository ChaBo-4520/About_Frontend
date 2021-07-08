<template>
  <div id="propsParent">
    <h3>Props를 이용하여 부모에서 자식요소로 데이터를 전달할 수 있다.</h3>
    <h3>I am parent!</h3>
    <input type="text" v-model="parentMsg" />
    <propsChild :childMsg="parentMsg"></propsChild>
  </div>
</template>

<script>
import propsChild from "./propsChild";
export default {
  data() {
    return {
      parentMsg: "Hello Vue! from Parent Component",
    };
  },
  components: {
    propsChild,
  },
};
</script>

<style scoped>
input {
  border: solid 1px black;
}

#propsParent {
  width: 40%;
  min-width: 35em;
  display: flex;
  flex-direction: column;
}
#propsParent h3:first-child {
  margin-top: 0;
}
* {
  margin-top: calc(var(--basic-space) / 2);
}
</style>
