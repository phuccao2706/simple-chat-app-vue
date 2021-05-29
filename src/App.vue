<template>
  <v-app class="pink">
    <div>
      <Navbar />
      <v-main>
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar },
};
</script>
