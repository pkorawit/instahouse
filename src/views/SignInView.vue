<template>
  <v-app>
    <v-main>
      <v-form>
        <v-container align="center" align-self="center" pa-10>
          <v-row>
            <v-col>
              <v-img src="@/assets/house.png" contain max-height="150">
              </v-img>
            </v-col>
          </v-row>
          <v-row class="mb-5">
            <v-col align="center">
              <h2>InstaHouse</h2>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                name="email"
                label="Email"
                id="email"
                hint="Your email address"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                type="password"
                name="password"
                label="Password"
                id="password"
                hint="Your password"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-btn rounded large color="primary" @click="signInWithPassword">Sign In with Password</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-main>
    <v-snackbar v-model="gotError">
      {{ errorMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>