<template>
    <b-container fluid>    

  <b-row class="header a1 text-white">
    <b-col class="text-center">
      <h1 class="text-white font-weight-bold display-2">Welcome in the World in Notebook Pro</h1>
      <p class="lead text-white">The Lorem ipsum color sit amet, consectetur adipiscing for skill 3 Part2</p>
    </b-col>
  </b-row>

  <b-row id="about" class="sectUni text-dark">
      <b-container>
        <b-col col lg="8" class="mx-auto">
          <h2 class="text-dark font-weight-bold">A propos de ce produit</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam:</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat vol</li>
          </ul>
        </b-col>
      </b-container>
  </b-row>

  <b-row class="sectUni b1 text-white">
    <b-container>
      <b-row>
        <b-col lg="6">
          <h1 class="mt-5 text-white font-weight-bold">The Ultimate Lorem</h1>
          <p class="pro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptates rerum eveniet sapiente repellat esse, doloremque quod recusandae deleniti nostrum assumenda vel beatae sed aut modi nesciunt porro quisquam voluptatem.</p>
        </b-col>
      </b-row>
    </b-container>
  </b-row>

  <b-row id="services" class="bg-secondary sectUni text-dark">
    <b-container>
      <b-row>
        <b-col col lg="8" class="mx-auto">
          <h2 class="text-dark font-weight-bold">Les services que nous offrons</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
        </b-col>
      </b-row>
    </b-container>
  </b-row>

  <b-row id="who" class="sectUni text-dark">
    <b-container>
      <b-row>
        <b-col col lg="8" class="mx-auto">
          <h2 class="text-dark font-weight-bold">Qui sommes nous ?</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
        </b-col>
    </b-row>
  </b-container>
</b-row>

                  <b-row>
                      <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade :interval="2000">
                        <b-carousel-slide
                            class="carousel"
                            img-src="img/lg/Xiaomi-Notebook-Pro.jpg">
                        </b-carousel-slide>
                        <b-carousel-slide
                            class="carousel"
                            img-src="img/lg/xiaomi_notebook_pro_review03.jpg">
                        </b-carousel-slide>
                        <b-carousel-slide
                            class="carousel"
                            img-src="img/lg/XIFRANCE.COM-Mi-NoteBook-PRO-2.jpg">
                        </b-carousel-slide>
                    </b-carousel>
                </b-row>

<b-container class="d-flex flex-column justify-content-center formulaire text-dark text-center">
            <div class="row">
            <h2 class="col-md-12 preco f45 text-dark">Précommande</h2>
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
