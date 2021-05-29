<template>
  <nav>
    <v-navigation-drawer app color="pink lighten-4">
      <v-list-item class="px-5">
        <div class="mx-auto">
          <span class="font-weight-light">vue</span>
          <span>app</span>
        </div>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          link
          v-for="link in links"
          v-bind:key="link.title"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [{ icon: "dashboard", title: "Dashboard", route: "/" }],
    };
  },
};
</script>
