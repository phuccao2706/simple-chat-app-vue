<template>
  <div class="playlist">
    <v-card dark class="mb-5">
      <div class="d-flex flex-no-wrap align-center">
        <v-avatar v-if="playlist.images" class="ma-3" size="250" tile>
          <v-img :src="playlist.images[0].url"></v-img>
        </v-avatar>

        <div>
          <v-card-title class="headline" v-text="playlist.name"></v-card-title>

          <v-card-subtitle v-text="playlist.description"></v-card-subtitle>

          <v-card-subtitle
            v-if="playlist.owner"
            v-text="
              'Created by: ' +
              playlist.owner.display_name +
              ' · ' +
              playlist.tracks.total +
              ' songs'
            "
          ></v-card-subtitle>

          <v-card-actions>
            <v-btn class="ml-2 mt-3" fab icon height="40px" right width="40px">
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>

    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-center"></th>
          <th class="text-left">Song</th>
          <th class="text-left">Artist</th>
          <th class="text-left">Album</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="({ track }, i) in items" :key="track.id" height="70">
          <td class="grey--text text--darken-1">
            {{ i + 1 }}
          </td>
          <td class="text-center">
            <div class="avatar-wrapper">
              <v-btn
                icon
                color="pink"
                class="avatar-wrapper__btn"
                @click="_playASong(track)"
              >
                <v-icon>mdi-play</v-icon>
              </v-btn>
              <v-avatar rounded>
                <img :src="track.album.images[0].url" alt="John" />
              </v-avatar>
            </div>
          </td>
          <td>{{ track.name }}</td>
          <td class="grey--text text--darken-1">
            {{ track.artists[0].name }}
          </td>
          <td class="grey--text text--darken-1">{{ track.album.name }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import router from "@/router";
import { getPlaylistDetail } from "@/services";
import { playASong } from "@/utils";

export default {
  name: "Playlist",
  data: () => ({
    playlist: {},
    items: [],
  }),
  methods: {
    async _getPlaylistDetail(id) {
      const data = await getPlaylistDetail(id);
      this.playlist = data;
      this.items = data.tracks.items;
    },
    _playASong(track) {
      playASong(track, window.spotifyPlayer, this.$store);
    },
  },

  mounted() {
    const id = router.currentRoute.params.id;
    this._getPlaylistDetail(id);
  },
};
</script>

<style scoped>
.avatar-wrapper {
  position: relative;
}

.avatar-wrapper:hover .avatar-wrapper__btn {
  opacity: 1;
}

.avatar-wrapper__btn {
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
</style>
