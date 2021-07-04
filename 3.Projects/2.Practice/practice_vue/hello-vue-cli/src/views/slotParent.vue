<template>
  <div>
    <slot-child>
      <div slot="header">
        {{ AA }}
      </div>
      <div slot="body">
        {{ AA }}
      </div>
    </slot-child>
    <slot-child>
      <div slot="header">
        {{ BB }}
      </div>
      <div slot="body">
        {{ BB }}
      </div>
    </slot-child>
  </div>
</template>

<script>
import slotChild from "../components/slotChild.vue";
export default {
  components: { slotChild },
  data() {
    return {
      AA: "안녕하세요!",
      BB: "반갑습니다!",
    };
  },
};
</script>

<style></style>
