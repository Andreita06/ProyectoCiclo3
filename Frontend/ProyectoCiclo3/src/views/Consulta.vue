<template>
  <div class="consulta">
    <Navegacion></Navegacion> 
    <v-app>
      <div class="home">
        <img alt="logo" src="../assets/MascotasVacunadas.jpg" />
      </div>

      <v-text-field
        outlined
        label="Buscador"
        append-icon="mdi-magnify"
        @click:append="consultar"
      >
      </v-text-field>

      <v-card elevation="2" class="pa-5 ma-5" min-height="500px">
        <v-row align="center" class="ma-0" justify="space between">
          <Carta
            nombreMascota="Maya"
            ultimaFechaV="31/08/2021"
            descripcion="Vacuna Séxtuple"
          ></Carta>
          <Carta
            nombreMascota="Coco"
            ultimaFechaV="23/12/2020"
            descripcion="Vacuna triple viral"
          ></Carta>
          <Carta
            nombreMascota="Violeta"
            ultimaFechaV="07/10/2020"
            descripcion="Vacuna Contra la Rabia"
          ></Carta>
        </v-row>
      </v-card>
      
    </v-app>
  </div>
</template>

<script>

import Navegacion from "../components/Navegacion.vue";
import Carta from "../components/Carta.vue";

export default {
  name: "Consulta",
  components: {
    Navegacion,
    Carta,
  },
};
</script>

<style lang="scss">
</style>