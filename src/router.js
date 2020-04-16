 import Vue from "vue";
 import Router from "vue-router";
 import AppHeader from "./layout/AppHeader";
 import AppFooter from "./layout/AppFooter";
 import Accueil from "./views/Accueil.vue";
 import Produit from "./views/Produit.vue";
 import Produit1 from "./views/Produit1.vue";
 import Register from "./views/Register.vue";
 import Produit2 from "./views/Produit2.vue";

 Vue.use(Router);

 export default new Router({
     linkExactActiveClass: "active",
     routes: [
         {
             path: "/",
             name: "accueil",
             components: {
                //  header: AppHeader,
                 default: Accueil,
                 footer: AppFooter
             }
         },
         {
             path: "/Produit",
             name: "Produit",
             components: {
                 header: AppHeader,
                 default: Produit,
                 footer: AppFooter
             }
         },
         {
             path: "/Produit1",
             name: "Produit1",
             components: {
                 header: AppHeader,
                 default: Produit1,
                 footer: AppFooter
             }
         },
         {
             path: "/register",
             name: "register",
             components: {
                 header: AppHeader,
                 default: Register,
                 footer: AppFooter
             }
         },
         {
             path: "/Produit2",
             name: "Produit2",
             components: {
                 header: AppHeader,
                 default: Produit2,
                 footer: AppFooter
             }
         }
     ],
     scrollBehavior: to => {
         if (to.hash) {
             return { selector: to.hash };
         } else {
             return { x: 0, y: 0 };
         }
     }
 });