<template>
    <v-card
    class="mx-auto"
  >
  <v-card-title>
      <v-icon>mdi-account-circle-outline</v-icon>  {{userId}}
    </v-card-title>
    <v-img
      :src="photoUrl"
      height="200px"
    ></v-img>

    <v-card-title>
      {{title}}
    </v-card-title>

    <v-card-subtitle>
      {{subtitle}}
    </v-card-subtitle>
    <v-card-subtitle>
      {{price}}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
    props:['userId', 'photoUrl', 'title', 'subtitle', 'price']
}
</script>

<style>

</style>