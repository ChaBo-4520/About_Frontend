<template>
  <div>
    <slot-child>
      <div>
        {{ AA }}
      </div>
    </slot-child>
    <slot-child>
      <div>
        {{ BB }}
      </div>
    </slot-child>
  </div>
</template>

<script>
import slotChild from "../components/slot-Child.vue";
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
