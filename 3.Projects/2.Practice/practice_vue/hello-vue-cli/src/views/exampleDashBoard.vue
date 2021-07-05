<template>
  <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
    <v-layout wrap row>
      <v-flex
        xs12
        sm6
        md3
        class="pb-2"
        v-for="(example, index) in examples"
        :key="index"
      >
        <div style="height:300px;">
          <example-card :example="example"></example-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import exampleCard from "../components/exampleCard.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: { exampleCard },
  computed: {
    ...mapState("main", ["examples"]),
  },
};
</script>

<style></style>
