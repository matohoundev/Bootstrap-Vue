<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="dark" id="mainNav" fixed="top">
      <b-navbar-brand tag="h1" href="Accueil.vue" class="limelight text-capitalize text">Ready</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

     <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
            <b-nav-item href="#about" class="js-scroll-trigger">About</b-nav-item>
            <b-nav-item href="#services" class="js-scroll-trigger">Services</b-nav-item>
            <b-nav-item href="#who" class="js-scroll-trigger">Qui sommes nous</b-nav-item>
        </b-navbar-nav>
        
        <b-nav-item-dropdown text="Nos appareils" right>
          <router-link to="/Produit" class="dropdown-item edo">Notebook Pro</router-link>
          <router-link to="/Produit1" class="dropdown-item limelight">One Plus</router-link>
          <router-link to="/Produit2" class="dropdown-item beach">Outlier Air</router-link>
        </b-nav-item-dropdown>
       </b-navbar-nav>
     </b-collapse>
  </b-navbar>
</div>
</template>
<script>
import { BNavbar, BNavbarBrand, BNavbarToggle, BNavbarNav } from "bootstrap-vue/esm/components/navbar";
import { BCollapse } from "bootstrap-vue/esm/components/collapse";
import { BNavItem, BNavItemDropdown, BNavForm } from "bootstrap-vue/esm/components/nav";  
import { BDropdownItem } from "bootstrap-vue/esm/components/dropdown";
import { BFormInput } from "bootstrap-vue/esm/components/form-input";
import { BButton } from "bootstrap-vue/esm/components/button";

export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,        
    BCollapse,
    BNavbarNav,    
    BNavItem,
    BNavItemDropdown,        
    BDropdownItem,
    BNavForm,
    BFormInput,
    BButton 
  }
};
</script>
<style>
</style>
