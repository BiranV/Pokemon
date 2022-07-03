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
      </v-card-title>

      <v-divider></v-divider>
      <PokemonList :category="category.name" :url="category.url"
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
    return {};
  },
  methods: {},
};
</script>
