<template>
  <div id="computed">
    <h4>Computed는 계산된 값을 사용하기 위해 사용한다.</h4>
    <p>원본 메시지: "{{ message }}"</p>
    <!-- computed는 data나 props처럼 {{}}로 사용할 수 있다. -->
    <p>역순으로 표현한 메시지: "{{ reversedMessage }}</p>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello!!",
      firstName: "Foo",
      lastName: "Boo",
    };
  },
  computed: {
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        const name = newValue.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
      },
    },
  },
};
</script>

<style scoped></style>
