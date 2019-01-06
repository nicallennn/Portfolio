<template>
  <nav class="custom-navbar">
    <!-- flat removes drop shadow and makes opaque -->
    <v-toolbar height="90" flat class="elevation-1" app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="grey--text text--darken-4">
        <span class="text-uppercase font-weight-bold mr-2">Nick Allen</span>
        <span class="font-weight-light hidden-sm-and-down">- Software Portfolio</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- social buttons -->
      <div class="social-buttons">
        <v-btn small fab class="grey white--text hidden-xs-only">
          <v-icon>blur_on</v-icon>
        </v-btn>
        <v-btn small fab class="grey darken-3 white--text hidden-xs-only">
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
    <v-navigation-drawer v-model="drawer" app class="info left-nav-drawer">
      <!-- nav items here -->
      <v-list>
        <v-list-tile v-for="link in mainLinks" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider class="white ma-3"></v-divider>
      <!-- projects items here -->
      <v-list>
        <v-list-tile v-for="link in projectLinks" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider class="white ma-3"></v-divider>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      mainLinks: [
        { icon: "perm_identity", text: "Profile", route: "/" },
        { icon: "file_copy", text: "Education & Work", route: "/cv" }
      ],
      projectLinks: [
        {
          icon: "graphic_eq",
          text: "Final Year Project",
          route: "/fyp"
        },
        {
          icon: "toll",
          text: "OO Programming",
          route: "/oo"
        },
        {
          icon: "line_style",
          text: "Web Development",
          route: "/webapp"
        },
        {
          icon: "vertical_split",
          text: "Software Management",
          route: "/sem"
        },
        {
          icon: "theaters",
          text: "3D Graphics",
          route: "/3dgraphics"
        }
      ]
    };
  }
};
</script>





