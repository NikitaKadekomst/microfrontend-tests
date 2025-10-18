// src/bootstrap.js
import("remote_vue/VueWidget")
    .then(() => import("./main"))
    .catch((err) => console.error(err));