<template>
  <v-container>
    <div v-if="submit == false">
      <v-form>
        <v-container>
          <v-row justify="center">
            <v-col cols="3">
              <v-row justify="center">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-row>
              <v-row justify="center">
                <v-text-field
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  counter
                  @click:append="show = !show"
                ></v-text-field
              ></v-row>
              <v-row justify="center">
                <v-btn
                  :disabled="check()"
                  color="success"
                  class="mt-4"
                  @click="login()"
                >
                  Log in
                </v-btn></v-row
              ></v-col
            ></v-row
          >
        </v-container>
      </v-form>
    </div>
    <div v-if="submit == true">
      <v-row justify="center" class="mt-2">
        <h1>Logged in successfully :)</h1></v-row
      >
      <v-row justify="center"
        ><v-btn color="blue" class="white--text mt-2" @click="logout()"
          >Logout</v-btn
        ></v-row
      >
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      submit: false,
      password: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    check() {
      if (!this.email || !this.password) {
        return true;
      } else return false;
    },
    login() {
      this.email = "";
      this.password = "";
      this.submit = true;
    },
    logout() {
      this.submit = false;
    },
  },
};
</script>

<style></style>
