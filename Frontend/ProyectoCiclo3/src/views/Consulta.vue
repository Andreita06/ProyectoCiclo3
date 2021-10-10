<template>
  <div class="container text-center">
    <div class="container">
    <img class="logo" alt="logo" src="../assets/MascotasVacunadas.jpg">
    
    
    <v-card elevation="2" class="pa-5 ma-5" min-height="500px">
      <h1 class="my-2 text-center">Mis mascotas</h1>
      <v-text-field
            outlined
            label="Buscador"
            append-icon="mdi-magnify"
            @click:append="consultar"
 >        
    </v-text-field>
      <v-row align="center" class="ma-0" justify="center">
        <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3">
          <Carta nombreMascota="Maya" ultimaFechaV="31/08/2021" descripcion="Vacuna Séxtuple"></Carta>
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3">
          <Carta nombreMascota="Maya" ultimaFechaV="31/08/2021" descripcion="Vacuna Séxtuple"></Carta>
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3">
          <Carta nombreMascota="Maya" ultimaFechaV="31/08/2021" descripcion="Vacuna Séxtuple"></Carta>
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3">
          <Carta nombreMascota="Maya" ultimaFechaV="31/08/2021" descripcion="Vacuna Séxtuple"></Carta>
        </v-col>
      </v-row>
    </v-card>
  </div>
  </div>
</template>

<script>
//import Busqueda from '../components/Busqueda.vue'
import Carta from '../components/Carta.vue'

export default {
  name: "Consulta",
  components: {
    //Busqueda,
    Carta  
  },
  methods:{
    consultar(){
      console.log("consulta")
    }
  }
}
</script>

<style lang="scss">
</style>