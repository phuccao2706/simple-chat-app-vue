<template>
  <div class="dashboard">
    <p class="text-h3 ml-5 mt-5 pink--text text--lighten-4">Dashboard</p>

    <div class="logout">
      <v-btn @click="this.handleRemoveAccessToken" class="pink white--text"
        >Logout</v-btn
      >
    </div>
  </div>
</template>

<script>
import { COMMIT_KEYS } from "../appConstants";
import { removeAccesstoken } from "../utils";

export default {
  name: "Category",
  data: () => ({
    categories: [],
  }),
  methods: {
    handleRemoveAccessToken() {
      this.$store.commit(COMMIT_KEYS.LOGOUT);

      return removeAccesstoken();
    },
  },
};
</script>
