<template>
  <div class="category">
    <p class="text-h3 ml-5 mt-5 pink--text text--lighten-4">Category</p>

    <v-container>
      <v-row>
        <v-col
          v-for="category in categories"
          v-bind:key="category.id"
          class="md-4"
        >
          <v-card
            class="mx-auto"
            min-width="275px"
            max-width="275px"
            @click="navigateToDetail(category.id)"
          >
            <v-img
              class="white--text align-end"
              height="275px"
              :src="category.icons[0].url"
            >
              <v-card-title class="category--title">
                {{ category.name }}
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
import { getGenres } from "@/services";

export default {
  name: "Category",
  data: () => ({
    categories: [],
  }),
  methods: {
    navigateToDetail(id) {
      router.push({ name: "CategoryDetail", params: { id } });
    },
    async getGen() {
      const { categories } = await getGenres();
      this.categories = categories.items;
      return categories;
    },
  },
  mounted() {
    this.getGen();
  },
};
</script>

<style scoped>
.category--title {
  transition: all 0.3s ease;
  user-select: none;
  cursor: pointer;
}

.category--title:hover {
  transition: all 0.3s ease;
  color: #f8bbd0;
}
</style>
