<template>
  
    <div class="container text-center">
    <div class="container">
  <!--<div class="registrarMascota">-->
   
    <v-app>
      <div class="home">
        <img class="logo" alt="logo" src="../assets/MascotasVacunadas.jpg" />
      </div>
      <Mascota></Mascota>
      <!-- <v-btn id="bt"
        class="mx-2"
        fab
        dark
        color="indigo"
        @click="nuevamascota"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn> -->
    </v-app>
  </div>
  </div>
</template>

<script>
import Mascota from "../components/Mascota.vue";
import Navegacion from "../components/Navegacion.vue";

export default {
  name: "InsMascota",
  components: {
    Mascota,
    Navegacion,
  },
  // nuevamascota() {
  //     this.$refs.Mascota
  //   }
};
</script>
<style lang="scss">
  #bt {
    justify-content: center
  }
</style>