<template>
  <div class="wrapper">
    <ul>
      <li>로그인</li>
      <li>회원가입</li>
      <li>마이페이지</li>
      <li>사이트맵</li>
    </ul>

    <div class="box">
      <div class="title">::before, ::after</div>
      <div>
        특정 요소의 앞이나 뒤에 지정한 내용(텍스트 또는 이미지)을 추가할 수
        있다.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper * {
  margin-bottom: var(--basic-space-small);
}
ul {
  display: flex;
}
li {
  list-style: none;
  margin: 6px;
}
li::after {
  content: "|";
  color: #ccc;
  margin-left: 10px;
}
li:last-child::after {
  content: "";
}

/* ex2 */
.box {
  max-width: 550px;
  padding: 32px 36px;
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;
  position: relative;
}
.box::before {
  content: "";
  width: 26px;
  height: 26px;
  border-top: 6px solid #cecece;
  border-left: 6px solid #4a4a4a;
  position: absolute;
  top: 0;
  left: 0;
}

.box::after {
  content: "";
  width: 26px;
  height: 26px;
  border-bottom: 6px solid #cecece;
  border-right: 6px solid #4a4a4a;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
