<template>
  <div class="category-detail">
    <p class="text-h3 ml-5 mt-5 pink--text text--lighten-4">
      {{ name }}
    </p>

    <v-container>
      <v-row>
        <v-col
          v-for="playlist in playlists"
          v-bind:key="playlist.id"
          cols="12"
          md="3"
          class="md-5"
        >
          <v-card class="mx-auto" @click="navigateToDetail(playlist.id)">
            <v-img class="white--text align-end" :src="playlist.images[0].url">
              <v-card-title class="category--title">
                {{ playlist.name }}
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import router from "@/router";
import { getCategoryPlaylists, getCategory } from "@/services";

export default {
  Name: "CategoryDetail",
  data: () => ({
    playlists: [],
    name: "",
  }),
  methods: {
    navigateToDetail(id) {
      router.push({ name: "Playlist", params: { id } });
    },
    async _getCategoryPlaylists(id) {
      const { playlists } = await getCategoryPlaylists(id);
      const { name } = await getCategory(id);

      this.playlists = playlists.items;
      this.name = name;
    },
  },

  mounted() {
    const id = router.currentRoute.params.id;
    this._getCategoryPlaylists(id);
  },
};
</script>
