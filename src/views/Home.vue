<template>
  <div class="home">
    <h1>Home Page</h1>

    <v-btn class="teal darken-1 white--text">Click Me</v-btn>
    <v-btn depressed class="blue darken-3 white--text">Click Me</v-btn>

    <v-btn class="green darken-3 white--text">
      <v-icon left>email</v-icon>
      <span>Email</span>
    </v-btn>

    <v-btn fab class="purple darken-3 white--text">
      <v-icon>email</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

