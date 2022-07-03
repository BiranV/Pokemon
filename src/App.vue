<template>
  <v-app id="app">
    <v-app-bar app color="#80D8FF">
      <div class="d-flex align-center">
        <a href="/"
          ><v-img
            alt="Pokemon Logo"
            link="/home"
            src="./assets/logo.png"
            width="100px"
        /></a>
      </div>
      <v-btn to="about" class="ml-4" text>
        <span class="mr-2">About us</span>
      </v-btn>
      <v-btn to="contact" text>
        <span class="mr-2">Contact us</span>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn to="login" text>
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background-color: rgb(225, 225, 225);
}
</style>
