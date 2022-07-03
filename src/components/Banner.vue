<template>
  <v-container>
    <v-carousel
      class="borderco"
      :show-arrows="false"
      height="400px"
      :cycle="false"
      interval="7000"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/banner2.jpg"),
        },
        {
          src: require("../assets/banner1.jpg"),
        },
      ],
    };
  },
};
</script>
<style>
.borderco {
  border: 1px solid rgb(119, 119, 119);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
}
</style>
