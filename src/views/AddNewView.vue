<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="6">
        <h2>New Post</h2>
      </v-col>
      <v-col cols="6" align="right">
        <v-btn icon to="/"><v-icon large>mdi-close</v-icon></v-btn>
      </v-col>
      <v-col cols="12">
        <h3>Select a photo</h3>
      </v-col>
      <v-col cols="12" align="center">
        <v-img :src="photoUrl" @click="selectPhoto"> </v-img>
      </v-col>
      <v-col cols="12" class="mt-5">
        <v-text-field
          name="name"
          v-model="name"
          label="Name of property"
          id="id"
          hint="Ex. Townhome 2 floor in downtown"
          outlined
        >
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          name="description"
          v-model="description"
          label="Description of property"
          hint="Ex. 250 sqrm. 3 bedroom 2 bathroom"
          id="id"
          outlined
        ></v-text-field>
      </v-col>
      <v-col align="center">
        <v-btn rounded large color="primary" @click="savePost">Save</v-btn>
      </v-col>
    </v-row>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <input type="file" ref="file" style="display: none" @change="uploadPhoto" />
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>