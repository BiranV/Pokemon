<template>
  <v-container>
    <v-card
      elevation="3"
      class="ma-8"
      v-for="(category, index) in categories"
      :key="index"
    >
      <v-card-title>
        {{ category.name.toUpperCase() }}
        
        <v-icon v-if="!expand" class="ml-2" @click="expand_results"
          >mdi-magnify-expand</v-icon
        >
        <v-icon v-if="expand" class="ml-2" @click="compress_results"
          >mdi-arrow-collapse-vertical</v-icon
        >
      </v-card-title>

      <v-divider></v-divider>
      <PokemonList
        :category="category.name"
        :url="category.url"
        :expand="expand"
    /></v-card>
  </v-container>
</template>

<script>
import PokemonList from "./PokemonList.vue";
export default {
  name: "PokemonCategories",
  props: ["categories"],
  components: { PokemonList },

  data() {
    return {
      expand: false,
    };
  },
  methods: {
    expand_results() {
      this.expand = true;
    },
    compress_results() {
      this.expand = false;
    },
  },
};
</script>
