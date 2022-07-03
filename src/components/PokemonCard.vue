<template>
  <div class="pokemon-card">
    <div class="div-img">
      <img class="profile-img" :src="image" />
    </div>
    <div class="div-info">
      <p class="pokemon-name">{{ capitalize(name) }}</p>
      <p class="pokemon-details">another details...</p>
    </div>
    <div class="div-icon">
      <v-icon
        :disabled="form_abilities"
        color="green"
        @click="show_abilities()"
        class="icon"
        >mdi-plus-box</v-icon
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PokemonCard",
  props: ["name", "item", "form_abilities"],

  data() {
    return {
      data: [],
      url: "https://pokeapi.co/api/v2/pokemon/" + this.name,
      image: "",
      abilities: null,
    };
  },
  async created() {
    const res = await axios.get(this.url);
    this.image = res.data.sprites.front_default;
    this.abilities = res.data.abilities;
  },

  methods: {
    capitalize(s) {
      return s && s[0].toUpperCase() + s.slice(1);
    },
    add_item(item) {
      this.snackbar = true;
    },
    show_abilities() {
      this.$emit("abilities", this.abilities);
      this.$emit("pokemon_name", this.capitalize(this.name));
    },
  },
};
</script>
<style scoped>
.div-img {
  display: inline-block;
  width: 100px;
  vertical-align: top;
}
.profile-img {
  width: 100%;
}
.div-info {
  display: inline-block;
  width: 150px;
  vertical-align: top;
}
.pokemon-name {
  display: inline-block;
  vertical-align: top;
  font-weight: bold;
}
.pokemon-details {
  display: inline-block;
  vertical-align: top;
}
.div-icon {
  display: block;
  width: 250px;
}
.pokemon-card {
  border-style: solid;
  border-width: 1px;
  padding: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
}
</style>
