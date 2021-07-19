<template>
  <div>
    <h2>호이스팅 테스트</h2>
    <span>콘솔창을 확인하시오</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    test1() {
      console.log(a);
      // 호이스팅에 의해 var a;가 끌어올려지기 때문에 undefined로 출력된다.
      var a = "a변수";
      console.log(b);
      // 함수 표현식은 호이스팅의 영향을 받지 않기때문에 undefined로 출력된다.
      console.log(c);
      // 함수 선언식은 호이스팅의 영향을 받기 때문에 function로 출력된다.
      var b = function() {
        console.log("function b");
      };
      function c() {
        console.log("function c");
      }
    },
  },
  mounted() {
    this.test1();
  },
};
</script>

<style></style>
