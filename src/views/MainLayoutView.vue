<template>
  <v-app>
    <div>
      <v-app-bar color="indigo" dense dark>
        <v-app-bar-nav-icon>
          <v-icon>mdi-home-city-outline</v-icon></v-app-bar-nav-icon
        >
        InstaHouse
        <v-spacer></v-spacer>
        <v-menu left bottom>
          <template v-slot:activator="{ attrs }">
            <v-btn @click="signOut" icon v-bind="attrs">
              <v-icon>mdi-logout-variant</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </v-app-bar>
    </div>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-fab-transition>
      <v-btn
        v-show="true"
        color="pink mb-14"
        to="/addnew"
        fab
        dark
        small
        fixed
        right
        bottom
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-bottom-navigation
      v-model="value"
      :input-value="active"
      color="indigo"
      fixed
    >
      <v-btn to="/">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="favorite">
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn to="mylist">
        <span>My Listing</span>

        <v-icon>mdi-clipboard-list-outline</v-icon>
      </v-btn>
      <v-btn to="about">
        <span>About</span>

        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "MainLyoutView",
  data() {
    return {
      value: 1,
      active: true,
    };
  },
  methods: {
    signOut() {
      this.$firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          this.$router.replace("/signin");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>