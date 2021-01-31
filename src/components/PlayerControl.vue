<template>
  <div
    class="player-control__container d-flex flex-column justify-center text-center"
  >
    <v-avatar
      v-if="this.$store.state.currentSong.album"
      class="mx-auto my-3"
      size="100"
      tile
    >
      <v-img :src="this.$store.state.currentSong.album.images[0].url"></v-img>
    </v-avatar>

    <div class="black--text text--lighten-1">
      {{ this.$store.state.currentSong.name }}
    </div>

    <v-btn icon color="pink" @click="togglePlay">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </div>
</template>

<script>
// import { togglePlay } from "../services";

export default {
  name: "PlayerControl",
  methods: {
    togglePlay() {
      window.spotifyPlayer.getCurrentState().then(({ paused }) => {
        if (paused) {
          window.spotifyPlayer.resume();
        } else {
          window.spotifyPlayer.pause();
        }
        this.getCurrentTimeStamp();
      });
    },
    getCurrentTimeStamp() {
      setInterval(
        () =>
          window.spotifyPlayer.getCurrentState().then(({ position }) => {
            console.log(position);
          }),
        1000
      );
    },
  },
};
</script>

<style scoped>
.player-control__container {
  width: 100%;
}
</style>
