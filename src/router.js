import Vue from "vue";
import Router from "vue-router";
import consulta from "./views/consulta.vue";
import mostrarmilitante from "./views/mostrarmilitante.vue";
import crearmilitante from "./views/crearmilitante.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "consulta",
      component: consulta
    },
    {
      path: "/militante/:id",
      name: "mostrar-militante",
      component: mostrarmilitante,
      props: true
    },
    {
      path: "/militante/crear",
      name: "crear-militante",
      component: crearmilitante
    }
  ]
});
