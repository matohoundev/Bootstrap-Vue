<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<style src="../src/assets/css/style.css"></style>
<script src="../src/assets/js/jquery-easing/jquery.easing.min.js"></script>
<script src="../src/assets/js/main.js"></script>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>
