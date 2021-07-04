<template>
  <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
    <v-layout wrap row>
      <v-flex xs12 sm6 md3 class="pb-2" v-for="i in 12" :key="i">
        <v-card height="300px" :color="`#${i}00000`">
          <example-card :title="examples[0].title"></example-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import exampleCard from "../components/exampleCard.vue";
export default {
  data() {
    return {
      examples: [
        {
          title: "제목",
        },
      ],
    };
  },
  components: { exampleCard },
};
</script>

<style></style>
