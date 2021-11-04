import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faWallet);

createApp(App).use(store).component("fa", FontAwesomeIcon).mount("#app");
