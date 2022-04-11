<template>
<v-container grid-list-xs>
  <v-row>
    <v-col xs="12" md="4" lg="3" v-for="post in posts" :key="post.id">
      <house-post
        :userId="post.userId"
        :photoUrl="post.photoUrl"
        :title="post.title"
        :subtitle="post.subtitle"
        :price="post.price"
      >
      </house-post>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import HousePost from "../components/HousePost.vue";
export default {
  components: {
    HousePost,
  },
  mounted() {
    const db = this.$firebase.firestore();
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //   console.log(`${doc.id} => ${doc.data().title}`);
          const post = {
            id: doc.id,
            userId: doc.data().userId,
            photoUrl: doc.data().photoUrl,
            title: doc.data().title,
            subtitle: doc.data().subtitle,
            price: doc.data().price,
          };
          this.posts.push(post);
        });
      });
  },
  data() {
    return {
      posts: [],
    };
  },
};
</script>

<style>
</style>