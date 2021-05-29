import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "http://localhost:8000/graphql",
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
