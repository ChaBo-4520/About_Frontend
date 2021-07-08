<template>
  <div class="wrapper">
    <h4>
      Vue는 최대한 효율적으로 랜더링동작을 수행하기 때문에 key를 설정하지 않으면
      input의 값이 변하지 않는다.
    </h4>
    <div class="content">
      <div class="example">
        <h4>key X</h4>
        <template v-if="loginType1 === 'username'">
          <p>사용자 이름</p>
          <input placeholder="사용자 이름을 입력하세요" />
        </template>
        <template v-else>
          <p>이메일</p>
          <input placeholder="이메일 주소를 입력하세요" />
        </template>
        <button @click="changeMode1()">로그인 유형 변경</button>
      </div>
      <div class="example">
        <h4>key O</h4>
        <template v-if="loginType2 == 'username'">
          <p>사용자 이름</p>
          <input placeholder="사용자 이름을 입력하세요" key="username-input" />
        </template>
        <template v-else>
          <p>이메일</p>
          <input placeholder="이메일 주소를 입력하세요" key="email-input" />
        </template>
        <button @click="changeMode2()">로그인 유형 변경</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginType1: "username",
      loginType2: "username",
    };
  },
  methods: {
    changeMode1() {
      this.loginType1 = this.loginType1 === "username" ? "email" : "username";
    },
    changeMode2() {
      this.loginType2 = this.loginType2 === "username" ? "email" : "username";
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 40%;
  min-width: 35em;
}
.content {
  display: flex;
  flex-direction: row;
}
input {
  width: 12em;
  margin-right: var(--basic-space-small);
  border: solid 1px black;
}
button {
  border: solid 1px black;
  text-align: center;
  background-color: #eeeeee;
  border-radius: 0.25em;
}
.wrapper * {
  margin-bottom: var(--basic-space-small);
}
.example {
  margin-right: var(--basic-space);
  display: flex;
  flex-direction: column;
}
</style>
