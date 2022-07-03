<template>
  <v-container>
    <v-icon v-if="!expand" class="ml-2" @click="expand_results"
      >mdi-magnify-expand</v-icon
    >
    <v-icon v-if="expand" class="ml-2" @click="compress_results"
      >mdi-arrow-collapse-vertical</v-icon
    >
    <v-row justify="center">
      <div
        class="div-item pt-4"
        v-for="(item, index) in pokemons_calculate()"
        :key="index"
      >
        <PokemonCard
          :name="item.pokemon.name"
          :item="item.pokemon"
          @abilities="show_abilities"
          @close_abilities="close_abilities"
          @pokemon_name="pokemon_name"
          :form_abilities="form_abilities"
        />
      </div>
    </v-row>
    <v-row justify="center" class="mt-6" v-show="form_abilities">
      <v-col cols="6">
        <v-card
          color="#F5F5F5"
          style="border: 1px solid"
          elevation="2"
          outlined
          tile
          ><v-card-title> Abilities of {{ name }} </v-card-title>
          <v-card-text>
            <v-chip
              class="ma-2"
              v-for="(item, index) in pokemon_abilities"
              :key="index"
              >{{ item }}</v-chip
            >
          </v-card-text>
          <v-row justify="end">
            <v-card-actions>
              <v-btn
                small
                color="#40C4FF"
                class="mb-2 mr-2 white--text"
                @click="add_to_cart()"
              >
                Add
              </v-btn>
              <v-btn small text class="mb-2 mr-2" @click="close_abilities()">
                Close
              </v-btn></v-card-actions
            >
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar">
      {{ "Pokémon " + name + " added successfully" }}

      <template v-slot:action="{ attrs }">
        <v-btn color="yellow" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import PokemonCard from "./PokemonCard.vue";
import axios from "axios";
export default {
  name: "PokeminList",
  props: ["category", "url"],
  components: { PokemonCard },

  data() {
    return {
      pokemons: [],
      form_abilities: false,
      name_abilities: "",
      name: "",
      pokemon_abilities: [],
      snackbar: false,
      flag: 0,
      expand: false,
    };
  },
  async created() {
    const res = await axios.get(this.url);
    this.pokemons = res.data.pokemon;
  },

  methods: {
    pokemons_calculate() {
      if (!this.expand) {
        return this.pokemons.slice(0, 6);
      } else return this.pokemons;
    },
    show_abilities(abilities) {
      this.pokemon_abilities = [];
      abilities.forEach((el) => {
        this.pokemon_abilities.push(el.ability.name);
      });
      this.form_abilities = !this.form_abilities;
    },
    close_abilities() {
      this.form_abilities = false;
    },
    pokemon_name(name) {
      this.name = name;
    },
    add_to_cart() {
      this.form_abilities = false;
      this.snackbar = true;
    },
    expand_results() {
      this.expand = true;
    },
    compress_results() {
      this.expand = false;
    },
  },
};
</script>
<style scoped>
.div-item {
  display: inline-block;
  width: 300px;
  margin-right: 15px;
  margin-bottom: 15px;
}
</style>
