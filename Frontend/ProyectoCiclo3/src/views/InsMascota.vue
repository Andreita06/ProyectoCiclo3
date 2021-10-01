<template>
  <div class="registrarMascota">
    <Navegacion></Navegacion>
    <v-app>
      <div class="home">
        <img alt="logo" src="../assets/MascotasVacunadas.jpg" />
      </div>
      <Mascota></Mascota>
    </v-app>
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
};
</script>
<style lang="scss">
</style>