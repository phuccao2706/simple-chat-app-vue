<template>
  <div class="dashboard">
    <p class="text-h3 ml-5 mt-5 pink--text text--lighten-4">{{ cats }}</p>
  </div>
</template>

<script>
import gql from "graphql-tag";

const hihi = gql`
  query {
    cats {
      id
      name
      age
      breed
    }
  }
`;

export default {
  name: "Category",
  methods: {},
  apollo: {
    cats: hihi,
  },
};
</script>
