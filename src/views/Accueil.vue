<template>
    <b-container class="backAccueil" fluid> 
        <div class="title d-flex flex-column justify-content-center">
    <b-row>
        <h1 class="h1a col limelight mr-auto text-center text-white">Ready</h1>
    </b-row>
    <b-nav class="row text-center nav1">
        <router-link tag="a" to="/Produit" class="dropdown-item col-sm-12 col-md-4 edo text-white">Notebook</router-link>
        <router-link tag="li" to="/Produit1" class="dropdown-item col-sm-12 col-md-4 limelight text-white">One Plus</router-link>
        <router-link tag="b" to="/Produit2" class="dropdown-item col-sm-12 col-md-4 beach text-white">Outlier Air</router-link>
    </b-nav>
        </div>

    <b-container class="d-flex flex-column justify-content-center formulaire text-white text-center"><!--formulaire-->
            <div class="row">
            <h2 class="col-md-12 preco f45 text-white">Contactez nous</h2>
            <form role="form" id="contact-form" class="col contact-form formcenter needs-validation" novalidate>
                <div class="nameEmail row">
                    <div class="one col-md-6">
                        <div class="form-group">
                            <label for="validationCustom01" class="f35">Nom</label>
                            <input type="text" class="form-control" autocomplete="off" id="validationCustom01" required>
                            <div class="valid-feedback">
                                Super !
                              </div>
                            <div class="invalid-feedback">
                                Regarde Bien!
                              </div>
                        </div>
                    </div>
                    <div class="two col-md-6">
                        <div class="form-group">
                            <label for="email" class="f35">Email</label>
                            <input type="email" class="form-control" id="validationCustomEmail" autocomplete="off" required>
                            <div class="valid-feedback">
                                ok celui-ci c'est ok !
                              </div>
                            <div class="invalid-feedback">
                                Ce n'est pas un mail valide!
                              </div>
                        </div>
                    </div>
                </div>
                <div class="row three">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="validationTextarea" class="f35">Message</label>
                            <textarea class="form-control" name="Message" id="validationTextarea" rows="6" required></textarea>
                            <div class="invalid-feedback">
                                Mais...Tu n'as rien n'écrit...
                              </div>
                        </div>
                    </div>
                </div>
                <div class="row for">
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary text-capitalize">Envoyer</button>
                    </div>
                </div>
            </form>
        </div>
</b-container>

<b-container>
    <div class="row">
        <hr>
        </div>
</b-container>

    </b-container>
</template>

<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import { BCard } from "bootstrap-vue/esm/components/card";
import { BContainer, BCol, BRow } from "bootstrap-vue/esm/components/layout";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
    BCard,
    BContainer,
    BCol,
    BRow
  }
};
</script>
