<template>
  <v-container>
    <v-row justify="center">
      <Banner />
    </v-row>
    <v-row justify="center">
      <PokemonCategories :categories="categories" />
    </v-row>
  </v-container>
</template>

<script>
import Banner from "./Banner.vue";
import PokemonCategories from "./PokemonCategories.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Banner,
    PokemonCategories,
  },
  data() {
    return {
      categories: [],
      apiUrl: "https://pokeapi.co/api/v2/type/",
    };
  },
  async created() {
    const res = await axios.get(this.apiUrl);
    this.categories = res.data.results.filter(
      (x) => x.name != "unknown" && x.name != "shadow"
    );
  },
};
</script>
