<template>
  <nav class="custom-navbar">
    <!-- flat removes drop shadow and makes opaque -->
    <v-toolbar clipped-left="false" height="100" flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="grey--text text--darken-4">
        <span class="text-uppercase font-weight-bold mr-2">Nick Allen</span>
        <span class="font-weight-light hidden-sm-and-down">- Software Portfolio</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="social-buttons hidden-xs-and-down">
        <v-btn small fab class="grey white--text">
          <v-icon>blur_on</v-icon>
        </v-btn>
        <v-btn small fab class="grey darken-3 white--text">
          <v-icon>music_note</v-icon>
        </v-btn>
        <v-btn small fab class="grey white--text">
          <v-icon>filter_vintage</v-icon>
        </v-btn>
        <v-btn small fab class="grey darken-3 white--text">
          <v-icon>email</v-icon>
        </v-btn>
      </div>
    </v-toolbar>

    <!-- navigation draw -->
    <v-navigation-drawer v-model="drawer" app class="grey darken-3">
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    };
  }
};
</script>



