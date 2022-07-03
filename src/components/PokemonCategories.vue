<template>
  <v-container>
    <v-chip outlined color="blue">
      <v-icon class="ml-2">mdi-cart-variant</v-icon> {{ counter }}
    </v-chip>

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
      <PokemonList
        :category="category.name"
        :url="category.url"
        @cart_counter="cart_counter"
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
      counter: 0,
    };
  },
  methods: {
    cart_counter() {
      this.counter = this.counter + 1;
    },
  },
};
</script>
