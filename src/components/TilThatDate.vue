<template>
  <div class="mx-auto">
    <v-btn
      v-if="!this.$store.state.isLoggedIn"
      class="pink white--text"
      @click="this.handleLogin"
      >Login
    </v-btn>

    <v-btn v-else class="pink white--text" @click="this.handleLogout"
      >Logout
    </v-btn>
  </div>
</template>

<script>
// import router from "@/router";
import initPlayer from "@/utils/initPlayer";
import { setAccessToken, removeAccesstoken, getAccesstoken } from "@/utils";
import { COMMIT_KEYS } from "@/appConstants";

export default {
  name: "TilThatDate",
  computed: {},
  methods: {
    async _getToken(accessToken) {
      setAccessToken(accessToken);
      // router.push("/");
      return accessToken;
    },
    handleLogin() {
      const { VUE_APP_CLIENT_ID } = process.env;
      const redirect_uri = "http://localhost:8080/";
      const scopes = "streaming, user-read-email, user-read-private";

      window.open(
        `https://accounts.spotify.com/authorize?client_id=${VUE_APP_CLIENT_ID}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`,
        "Login with Spotify",
        "width=800,height=600"
      );
    },
    handleLogout() {
      this.$store.commit(COMMIT_KEYS.LOGOUT);

      return removeAccesstoken();
    },
  },
  mounted() {
    const token =
      getAccesstoken() ||
      window.location.hash.substr(1).split("&")[0].split("=")[1];
    console.log(token);
    if (token) {
      this._getToken(token);
      initPlayer();
      this.$store.commit(COMMIT_KEYS.LOGIN);
    }
  },
};
</script>
