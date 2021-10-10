<template>
  
  <div class="container text-center">
    <div class="container">
  <!--<div class="inscripcion">-->
    
    <v-app>
      <div class="home">
        <img class="logo" alt="logo" src="../assets/MascotasVacunadas.jpg" />
      </div>
      <Formulario></Formulario>
    </v-app>
  </div>
  </div>
</template>

<script>
import Formulario from "../components/Formulario.vue";

export default {
  name: "Inscripcion",
  components: {
    Formulario,
  },
};
</script>
<style lang="scss">
</style>